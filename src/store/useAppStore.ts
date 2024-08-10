import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipesSlide";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import {
  createNotificationsSlice,
  NoticationsSliceType,
} from "./notificationsSlice";

export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & NoticationsSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationsSlice(...a),
  }))
);
