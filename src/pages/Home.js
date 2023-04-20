import "./Home.css";
import React, { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import ButtonLink from "../components/ButtonLink";
import MovieCardList from "../components/MovieCardList";
import MovieCard from "../components/MovieCard";

import { discoverMovies } from "../apis/TmdbApi";
import Pagination from "../components/Pagination";

export default function Home() {
	const [state, setstate] = useState({});

	const getMovies = async (n) => {
		let res = await discoverMovies(n);
		setstate(res);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className='content'>
			<SearchBar />
			<div className='block edges'>
				<div>
					<ButtonLink to='/Favorites' label='Favorites' />
					<ButtonLink to='/Genres' label='Genres' />
				</div>
				<p className='bold'>{state.total_results} results</p>
			</div>
			<div className='block'>
				<MovieCardList data={state.results} />
				<Pagination currentPage={state.page} totalPages={state.total_pages} />
			</div>
		</div>
	);
}
