import { createStore } from 'redux';

const reducer = (state,action) => {

	if (action.type == 'TOKEN') {
		return {
			...state,
			token: action.token
		};
	} else if (action.type == 'QUERY') {
		return {
			...state,
			query: action.query
		}
	} else if (action.type == 'ARTISTS_LIST') {
		return {
			...state,
			artistSearchList: action.artistSearchList
		}
	} else if (action.type == 'SET_ARTIST') {
		return {
			...state,
			artist: action.artist
		}
	}

	return state;
}

export default createStore(reducer, { token: null, query: null, artistSearchList: [], artist: null, album: null });