
export interface PokemonListModel {
    name: string;
    url: string;
}

export interface PokemonListResponseModel {
    count: number;
    next: string;
    previous: string;
    results: PokemonListModel[];
} 