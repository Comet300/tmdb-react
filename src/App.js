import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Genres from "./pages/Genres";
import MoviesByGenre from "./pages/MoviesByGenre";

import { findMovieByTitle, discoverMovies, discoverMoviesByGenre, getMovieGeneresList } from "./apis/TmdbApi";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Favorites' element={<Favorites />} />
				<Route path='/Genres' element={<Genres />} />
				<Route path='/Genres/:id' element={<MoviesByGenre />} />
			</Routes>
		</BrowserRouter>
	);
}
