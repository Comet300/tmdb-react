import "./MovieCardList.css";
import React from "react";
import MovieCard from "./MovieCard";
export default function MovieCardList(props) {
	const mapDataToCards = (data) => {
		if (data) {
			console.log(data);
			return data.map((item) => <MovieCard imgPath={item.poster_path} title={item.title} />);
		}
	};
	return <div className='movieGrid'>{mapDataToCards(props.data)}</div>;
}
