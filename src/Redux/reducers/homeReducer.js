import { GET_ALL_NEWS } from '../actionType/ActionType';

var initialState = {};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_NEWS:
			return {
				...state,
				newsList: action.payload,
			};

		default:
			return state;
	}
};

export default homeReducer;
