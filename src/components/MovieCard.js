import "./MovieCard.css";
import React from "react";

export default function MovieCard(props) {
	return (
		<div className='mCard'>
			<img src={"https://image.tmdb.org/t/p/w500" + props.imgPath} alt={props.title} />

			<div className='mCardRow'>
				<h3>{props.title}</h3>
				<button>
					<span className='material-symbols-outlined'>star</span>
				</button>
			</div>
		</div>
	);
}
