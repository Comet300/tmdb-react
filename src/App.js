import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Genres from "./pages/Genres";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Movies />} />
				<Route path='/Favorites' element={<Favorites />} />
				<Route path='/Genres' element={<Genres />} />
				<Route path='/Genres/:id' element={<Movies />} />
			</Routes>
		</BrowserRouter>
	);
}
