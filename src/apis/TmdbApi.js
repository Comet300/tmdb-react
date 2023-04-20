import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

instance.interceptors.request.use(
	function (config) {
		try {
			config.params["api_key"] = "7a85acd49fedf1a0dc08bcb3d47943ce";
			return config;
		} catch (e) {}
	},
	function (error) {
		return Promise.reject(error);
	}
);

export const findMovieByTitle = async (title, page = 1, errCallback) => {
	let res = await instance.get("/search/movie", {
		params: {
			page,
			query: title.trim().replace(" ", "+"),
		},
	});
	if (res.status !== 200 && errCallback) errCallback();
	return res.data;
};

export const discoverMovies = async (page = 1, errCallback) => {
	let res = await instance.get("/discover/movie", {
		params: {
			page,
		},
	});
	if (res.status !== 200 && errCallback) errCallback();
	return res.data;
};

export const discoverMoviesByGenre = async (genre, page = 1, errCallback) => {
	let res = await instance.get("/discover/movie", {
		params: {
			page,
			with_genres: genre,
		},
	});
	if (res.status !== 200 && errCallback) errCallback();
	return res.data;
};

export const getMovieGeneresList = async (errCallback) => {
	let res = await instance.get("/genre/movie/list", { params: {} });
	if (res.status !== 200 && errCallback) errCallback();
	return res.data;
};
