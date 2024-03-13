import { create } from 'zustand';

interface RecipeState {
  recipes: any[];
  search: string;
  id: string;
  recipe: any[];
  setRecipes: (recipes: any[]) => void;
  setSearch: (search: string) => void;
  setId: (id: string) => void;
  getRecipe: (recipe: any[]) => void;
}

export const useRecipe = create<RecipeState>((set) => ({
  recipes: [],
  search: "",
  id: "",
  recipe: [],

  setRecipes: (recipes: any[]) => {
    set({ recipes });
  },

  setSearch: (search: string) => {
    set({ search });
  },

  setId: (id: string) => {
    set({ id });
  },

  getRecipe: (recipe: any[]) => {
    set({ recipe });
  },
}));
