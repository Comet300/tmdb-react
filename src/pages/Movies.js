import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { storeMovies, nextPage, previousPage, registerSearchTerm, clearSearchTerm } from "../redux/movies";
import { addFavorite, removeFavoriteById } from "../redux/favorites";

import SearchBar from "../components/SearchBar";
import ButtonLink from "../components/ButtonLink";
import MovieCardList from "../components/MovieCardList";
import { discoverMovies, findMovieByTitle, discoverMoviesByGenre } from "../apis/TmdbApi";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

export default function Home() {
	let { id } = useParams();

	const dispatch = useDispatch();
	const { isLoading, searchTerm, page, results, total_results, total_pages } = useSelector((state) => state.movies);
	const { favoritesList } = useSelector((state) => state.favorites);

	const favoriteIds = favoritesList.map((a) => a.id);
	//fetch initial pentru filmele recomandate
	useEffect(() => {
		if (id) getDiscoverMoviesWithGenre(id);
		else getDiscoverMovies();
	}, [id]);

	//fetch conditional
	useEffect(() => {
		if (searchTerm === "") {
			if (id) getDiscoverMoviesWithGenre(id, page);
			else getDiscoverMovies(page);
		} else {
			fetchMoviesBySearchTerm(searchTerm, page);
		}
	}, [page]);

	//functie intermediara pentru a putea folosi sintaxa async/await
	const getDiscoverMovies = async (n = 1) => {
		let res = await discoverMovies(n);
		dispatch(storeMovies(res));
	};

	//functie intermediara pentru a putea folosi sintaxa async/await
	const getDiscoverMoviesWithGenre = async (id, n = 1) => {
		let res = await discoverMoviesByGenre(id, n);
		dispatch(storeMovies(res));
	};

	//functie intermediara pentru a putea folosi sintaxa async/await
	const fetchMoviesBySearchTerm = async (title, n = 1) => {
		let res = await findMovieByTitle(title, n);
		dispatch(storeMovies(res));
	};

	if (isLoading) return <Spinner />;
	return (
		<div className='content'>
			<SearchBar
				onSearch={(term) => {
					dispatch(registerSearchTerm(term));
					fetchMoviesBySearchTerm(term);
				}}
				onCancelSearch={() => {
					dispatch(clearSearchTerm());
					if (id) getDiscoverMoviesWithGenre();
					else getDiscoverMovies();
				}}
				value={searchTerm}
			/>
			<div className='block edges'>
				<div>
					{id ? <ButtonLink to='/' label='Home' /> : <></>}
					<ButtonLink to='/Favorites' label='Favorites' />
					{!id ? <ButtonLink to='/Genres' label='Genres' /> : <></>}
				</div>
				<p className='bold'>
					{total_results} results {searchTerm ? " for " + searchTerm : ""}
				</p>
			</div>
			<div className='block'>
				<MovieCardList
					data={results}
					favorites={favoriteIds}
					onAddFavorite={(movieData) => {
						dispatch(addFavorite(movieData));
					}}
					onRemoveFavorite={(movieId) => {
						console.log(movieId);
						dispatch(removeFavoriteById(movieId));
					}}
				/>

				<Pagination
					currentPage={page}
					totalPages={total_pages}
					onNextPage={() => {
						dispatch(nextPage());
					}}
					onPrievousPage={() => {
						dispatch(previousPage());
					}}
				/>
			</div>
		</div>
	);
}
