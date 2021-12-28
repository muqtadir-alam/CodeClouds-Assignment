import axios from 'axios';

import { GET_ALL_NEWS } from '../actionType/ActionType';

export const getNews = value => dispatch => {
	const url = `https://newsapi.org/v2/top-headlines?country=${value}&apiKey=a716e505e5804b67b258cd039c370521`;

	axios
		.get(url)
		.then(res => {
			dispatch({
				type: GET_ALL_NEWS,
				payload: res.data,
			});
			console.log(res);
		})
		.catch(err => console.log(err));
};

export const getFilterNews = Filter => dispatch => {
	const url = `https://newsapi.org/v2/top-headlines?q=${Filter}&apiKey=a716e505e5804b67b258cd039c370521`;

	axios
		.get(url)
		.then(res => {
			dispatch({
				type: GET_ALL_NEWS,
				payload: res.data,
			});
			console.log(res);
		})
		.catch(err => console.log(err));
};
