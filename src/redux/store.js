import { configureStore } from "@reduxjs/toolkit";
import movies from "./movies";
import favorites from "./favorites";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
};

const persistedFavorites = persistReducer(persistConfig, favorites);

//reductorul filmelor favorite persista in local storage
export const store = configureStore({
	reducer: {
		movies: movies,
		favorites: persistedFavorites,
	},
	middleware: [thunk],
});

export const persistor = persistStore(store);
