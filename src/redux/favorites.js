import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
	name: "favorites",
	initialState: {
		favoritesList: [],
	},
	reducers: {
		addFavorite: (state, action) => {
			state.favoritesList.push(action.payload);
		},
		removeFavoriteById: (state, action) => {
			state.favoritesList = state.favoritesList.filter((a) => a.id !== action.payload);
		},
	},
});

export const { addFavorite, removeFavoriteById } = favoriteSlice.actions;
export default favoriteSlice.reducer;
