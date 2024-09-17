import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetailsService } from '../../../core/services/pokemon-details.service';
import { PokemonDetails } from '../../../shared/models/PokemonDetails';
import { PokemonService } from '../../../core/services';
import { materiaModules } from '../../../material.module';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    AsyncPipe, 
    CommonModule,
    materiaModules
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  @Input({ required: true, transform: (id: string) => numberAttribute(id, 1) })
  id = 1;

  pokemonDetailsService = inject(PokemonDetailsService);
  pokemonListService = inject(PokemonService);
  router = inject(Router);
  pokemonDetails$!: Observable<PokemonDetails | undefined>;

  ngOnInit(): void {
    this.pokemonDetails$ = this.pokemonDetailsService.getPokemonDetails(this.id, history.state?.pokemon);
  }

  backToPage() {
    this.router.navigate(['/']);
  }
}