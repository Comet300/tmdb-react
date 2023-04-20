import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavoriteById } from "../redux/favorites";

import ButtonLink from "../components/ButtonLink";
import MovieCardList from "../components/MovieCardList";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

export default function Favorites() {
	const dispatch = useDispatch();
	const { favoritesList } = useSelector((state) => state.favorites);
	const favoriteIds = favoritesList.map((a) => a.id);

	return (
		<div className='content'>
			<div className='block edges'>
				<div>
					<ButtonLink to='/' label='Home' />
					<ButtonLink to='/Genres' label='Genres' />
				</div>
				<p className='bold'>{favoritesList.length} results</p>
			</div>
			<div className='block'>
				<MovieCardList
					data={favoritesList}
					favorites={favoriteIds}
					onAddFavorite={(movieData) => {
						dispatch(addFavorite(movieData));
					}}
					onRemoveFavorite={(movieId) => {
						console.log(movieId);
						dispatch(removeFavoriteById(movieId));
					}}
				/>
			</div>
		</div>
	);
}
