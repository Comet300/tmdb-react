import "./SearchBar.css";

import React, { useState, useEffect } from "react";

export default function Searchbar(props) {
	const [searchVal, setSearchVal] = useState("");

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchVal === "") return;

			props.onSearch(searchVal);
		}, 1000);
		return () => clearTimeout(delayDebounceFn);
	}, [searchVal]);

	const onSearchValChange = (event) => {
		setSearchVal(event.target.value);
	};

	return (
		<div className='sbContainer'>
			<span className='material-symbols-outlined'>search</span>
			<input onChange={onSearchValChange} value={searchVal} placeholder='Search by title' />
			<button onClick={props.onCancelSearch}>
				<span className='material-symbols-outlined'>close</span>
			</button>
		</div>
	);
}
