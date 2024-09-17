import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FavoriteService {
    private readonly FAVORITE_KEY = 'favorite_pokemon';

    getFavorites(): string[] {
        const favorites = localStorage.getItem(this.FAVORITE_KEY);
        return favorites ? JSON.parse(favorites) : [];
    }

    addFavorite(pokemonName: string) {
        const favorites = this.getFavorites();
        if (!favorites.includes(pokemonName)) {
            favorites.push(pokemonName);
            localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(favorites));
        }
    }

    removeFavorite(pokemonName: string) {
        let favorites = this.getFavorites();
        favorites = favorites.filter(name => name !== pokemonName);
        localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(favorites));
    }

    isFavorite(pokemonName: string): boolean {
        return this.getFavorites().includes(pokemonName);
    }
}
