import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DisplayPokemon } from '../../shared/models';

export interface AppState {
    selectedPokemon?: DisplayPokemon;
    pokemonSearch?: string;
    totalPokemonCount?: number;
} 
 
@Injectable({ 
    providedIn: 'root'
})
export class AppStateService {  
    private initialState: AppState = {
    };

    private stateSubject = new BehaviorSubject<AppState>(this.initialState);
    public state$: Observable<AppState> = this.stateSubject.asObservable();

    getState(): AppState {
        return this.stateSubject.getValue();
    } 

    setState(partialState: Partial<AppState>): void {
        const currentState = this.getState();
        this.stateSubject.next({ ...currentState, ...partialState });
        console.log("satc",partialState)
    }

    setSelectedPokemon(pokemon: any): void {
        this.setState({ selectedPokemon: pokemon });
    }
} 