import "./MovieCard.css";
import React, { useState } from "react";
import ReactPlaceholder from "react-placeholder";

export default function MovieCard(props) {
	const [loaded, setLoaded] = useState(false);

	let image = <img src={"https://image.tmdb.org/t/p/w500" + props.imgPath} alt={props.title} />;
	return (
		<>
			<ReactPlaceholder ready={loaded} type='media' rows={14}>
				<div className='mCard'>
					{image}

					<div className='mCardRow'>
						<h3>{props.title}</h3>
						<button className={`${props.isFavorite ? "fav" : ""}`} onClick={props.isFavorite ? props.onRemoveFavorite : props.onAddFavorite}>
							<span className='material-symbols-outlined'>star</span>
						</button>
					</div>
				</div>
			</ReactPlaceholder>
			<img
				className='hideAbsolute'
				alt=''
				onLoad={() => {
					setLoaded(true);
				}}
				src={"https://image.tmdb.org/t/p/w500" + props.imgPath}
			/>
		</>
	);
}
