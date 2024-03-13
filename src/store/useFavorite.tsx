import { create } from "zustand";

interface Recipe {
  id: number;
  // Add other properties of the recipe here
}

interface FavoriteState {
  favorite: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (recipe: Recipe) => void;
}

export const useFavorite = create((set) => ({
  favorite: [],
  addFavorite: (recipe: Recipe) =>
    set((state: FavoriteState) => ({
      favorite: [...state.favorite, recipe],
    })),
  removeFavorite: (recipe: Recipe) =>
    set((state: FavoriteState) => ({
      favorite: state.favorite.filter((r: Recipe) => r.id !== recipe.id),
    })),
}));