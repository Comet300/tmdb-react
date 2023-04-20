import "./Genres.css";
import React, { useEffect, useState } from "react";
import { getMovieGeneresList } from "../apis/TmdbApi";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Genres() {
	const [state, setstate] = useState({ loading: true });
	useEffect(() => {
		FetchMovieGenres();
	}, []);

	const FetchMovieGenres = async (n = 1) => {
		let res = await getMovieGeneresList(n);
		setstate({ loading: false, ...res });
	};

	const mapDataToLinks = (data) => {
		if (data)
			return data.map((item) => (
				<Link className='link' to={"/Genres/" + item.id}>
					{item.name}
				</Link>
			));
	};

	if (state.loading) <Spinner />;
	return <div className='menu'>{mapDataToLinks(state.genres)}</div>;
}
