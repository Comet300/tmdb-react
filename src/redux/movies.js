import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		isLoading: true,
		page: 1,
		searchTerm: "",
	},
	reducers: {
		storeMovies: (state, action) => {
			state.isLoading = false;
			state.page = action.payload.page;
			state.results = action.payload.results;
			state.total_results = action.payload.total_results;
			state.total_pages = action.payload.total_pages;
		},
		registerSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
			state.isLoading = true;
		},
		clearSearchTerm: (state) => {
			state.searchTerm = "";
			state.isLoading = true;
		},
		nextPage: (state) => {
			if (state.page < state.total_pages) {
				state.page = state.page + 1;
				state.isLoading = true;
			}
		},
		previousPage: (state) => {
			if (state.page > 1) {
				state.page = state.page - 1;
				state.isLoading = true;
			}
		},
	},
});

export const { storeMovies, registerSearchTerm, nextPage, previousPage, clearSearchTerm } = moviesSlice.actions;
export default moviesSlice.reducer;
