import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { DisplayPokemon } from '../../../shared/models';
import { PokemonCardComponent } from '../../../shared/components/pokemon-card/pokemon-card.component';
import { materiaModules } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteService, PokemonService } from '../../../core/services';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { PageEvent } from '@angular/material/paginator';
import { CanComponentDeactivate } from '../../../core/guards/save-state.guard';
import { AppState, AppStateService } from '../../../core/services/app-state.service';
  
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PokemonCardComponent,
    materiaModules, 
    FormsModule,
    CommonModule,
    PaginationComponent
    // PokemonPaginationComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit, CanComponentDeactivate {
  private readonly favoriteService = inject(FavoriteService);
  private readonly appStateService = inject(AppStateService);
  totalPokemonCount: number | undefined;
  pokemonList$!: Observable<DisplayPokemon[]>;
  filteredPokemon$!: Observable<DisplayPokemon[]>;
  appState$!: Observable<AppState>;

  constructor() {
    this.loadPageData();
    const appState = this.appStateService.getState();
    if (appState.pokemonSearch) {
      this.searchTerm = appState.pokemonSearch ?? "";
      this.onfilteredPokemon(this.searchTerm);
    }
  }

  ngOnInit(): void {
    this.appState$ = this.appStateService.state$;
  } 
 
  pokemonService = inject(PokemonService);
  searchTerm: string = '';
  onfilteredPokemon(search: string): void {
    this.filteredPokemon$ = this.pokemonList$.pipe(
      map(pokemon => pokemon.filter(p => p.name.includes(search.toLowerCase())))
    );
  }

  handleToggleFavorite(pokemonName: string) {
    if (this.favoriteService.isFavorite(pokemonName)) {
      this.favoriteService.removeFavorite(pokemonName);
    } else {
      this.favoriteService.addFavorite(pokemonName);
    }
  }

  onPageEvent(event: PageEvent): void {
    console.log({ event })
    const offset = event.pageIndex * event.pageSize;
    const limit = event.pageSize;
    this.loadPageData(offset, limit);
  }

  loadPageData(offset?: number, limit?: number): void {
    this.pokemonList$ = this.pokemonService.getPokemons(offset, limit);
    this.filteredPokemon$ = this.pokemonList$;
  }


  saveState(): void {
    const newState = { pokemonSearch: this.searchTerm };
    this.appStateService.setState(newState);
  }
  canDeactivate(): boolean {
    return true;
  }
}          