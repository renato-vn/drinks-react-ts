import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlide";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
  }))
);
