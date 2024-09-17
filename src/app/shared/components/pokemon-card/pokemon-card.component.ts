import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayPokemon } from '../../models';
import { materiaModules } from '../../../material.module'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink, CommonModule, ...materiaModules],
  templateUrl: './pokemon-card.component.html', 
  styleUrl: './pokemon-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,  
}) 
export class PokemonCardComponent {
  @Input({ required: true }) pokemon!: DisplayPokemon;

  @Output() onFavorite = new EventEmitter<string>();

  toggleFavorite(pokemon: DisplayPokemon): void{
    pokemon.isFavorite = !pokemon.isFavorite;
    this.onFavorite.emit(pokemon.name);
  } 
}    