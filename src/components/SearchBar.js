import "./SearchBar.css";

import React, { useState, useEffect } from "react";

export default function Searchbar() {
	const [searchVal, setSearchVal] = useState("");

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchVal === "") return;
			console.log(searchVal);
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
			<button>
				<span className='material-symbols-outlined'>close</span>
			</button>
		</div>
	);
}
