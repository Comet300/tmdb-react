import "./MovieCardList.css";
import React from "react";
import MovieCard from "./MovieCard";
export default function MovieCardList(props) {
	const mapDataToCards = (data) => {
		console.log(props.favorites);
		if (data) {
			return data.map((item) => (
				<MovieCard
					isFavorite={props.favorites.includes(item.id) ? 1 : 0}
					onAddFavorite={() => {
						props.onAddFavorite(item);
					}}
					onRemoveFavorite={() => {
						props.onRemoveFavorite(item.id);
					}}
					key={item.id}
					imgPath={item.poster_path}
					title={item.title}
				/>
			));
		}
	};
	return <div className='movieGrid'>{mapDataToCards(props.data)}</div>;
}
