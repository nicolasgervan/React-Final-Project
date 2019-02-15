import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const reducer = (state,action) => {

	if (action.type === 'TOKEN') {
		return {
			...state,
			token: action.token
		};
	} else if (action.type === 'QUERY') {
		return {
			...state,
			query: action.query
		}
	} else if (action.type === 'ARTISTS_LIST') {
		return {
			...state,
			artistSearchList: action.artistSearchList
		}
	} else if (action.type === 'SET_ARTIST') {
		return {
			...state,
			artist: action.artist
		}
	} else if (action.type === 'ADD_FAV') {
		return {
			...state,
			favouriteSongs: state.favouriteSongs.concat(action.id)
		}
	} else if (action.type === 'REMOVE_FAV') {
		return {
			...state,
			favouriteSongs: state.favouriteSongs.filter(song => song !== action.id)
		}
	}
	else if (action.type === 'FETCHING_DATA') {
		return {
			...state,
			loading: action.payload
		}
	}

	return state;
}

export default createStore(reducer, { token: null, loading: false, query: null, artistSearchList: [], artist: null, album: null, favouriteSongs: [] }, applyMiddleware(thunk));