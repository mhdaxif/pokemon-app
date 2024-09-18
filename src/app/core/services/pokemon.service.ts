import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { EMPTY, Observable, catchError, count, forkJoin, from, map, of, retry, switchMap } from 'rxjs';
import { DisplayPokemon, Pokemon, Ability, Statistics, RawAbility, RawStats, PokemonListResponseModel } from '../../shared/models';
import { FavoriteService } from './favorite.service';
import { AppStateService } from './app-state.service';

const PAGE_SIZE = 20;   

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly httpClient = inject(HttpClient);
  private readonly favoriteService = inject(FavoriteService);
  private readonly appStateService = inject(AppStateService);

  getPokemons(offset = 0, limit: number = PAGE_SIZE): Observable<DisplayPokemon[]> {   
   if(!offset) offset = 0;
   if(!limit) limit = PAGE_SIZE;  
   
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return this.httpClient
      .get<PokemonListResponseModel>(url)
      .pipe(
        map((x: PokemonListResponseModel) => {
          const newState = { totalPokemonCount: x.count };
          this.appStateService.setState(newState);  

          return x.results;
        }),
        switchMap((results) => forkJoin(results.map((x: any) => this.fetchPokemonData(x.url))))
      );
  }

  private covertToPokemon(pokemon: Pokemon): DisplayPokemon {
    if(!pokemon) return {} as DisplayPokemon; 
    
    const { id, name, height, weight, sprites, abilities: a, stats: statistics } = pokemon;

    const { abilities, stats }: { abilities: Ability[]; stats: Statistics[]; } = this.shapeData(a, statistics);

    return {
      id,
      name,
      height,
      weight,
      abilities,
      stats,
      frontShiny: sprites.front_shiny,
      isFavorite: this.isFavorite(name)
    }
  }

  private fetchPokemonData(url: string): Observable<DisplayPokemon> {
    return this.httpClient
      .get<Pokemon>(url)
      .pipe(
        map((pokemon) => this.covertToPokemon(pokemon)),
        catchError((err) => {
          console.error(err);
          return EMPTY;
        }),
      );
  }

  private shapeData(rawAbilities: RawAbility[], rawStats: RawStats[]) {
    const abilities: Ability[] = rawAbilities.map(({ ability, is_hidden }) => ({
      name: ability.name,
      isHidden: is_hidden
    }));

    const stats: Statistics[] = rawStats.map(({ stat, effort, base_stat }) => ({
      name: stat.name,
      effort,
      baseStat: base_stat,
    }));

    return {
      abilities,
      stats
    };
  }


  private isFavorite(pokemonName: string): boolean {
    return this.favoriteService.isFavorite(pokemonName);
  }
} 