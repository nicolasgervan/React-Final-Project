const setToken = token => {
	return {
        type:"TOKEN",
        token: token
      }
};

const setQuery = query => {
	return {
		type: 'QUERY',
		query: query
	}
};

const artistsList = data => {
	return {
		type: 'ARTISTS_LIST',
		artistSearchList: data
	}
};

const setArtist = artist => {
	return {
		type: 'SET_ARTIST',
		artist: artist
	}
};

const setAlbum = album => {
	return {
		type: 'SET_ALBUM',
		album: album
	}
}

const addFav = id => {
	return {
		type: 'ADD_FAV',
		id: id
	}
}

const removeFav = id => {
	return {
		type: 'REMOVE_FAV',
		id: id
	}
}

export { setToken, setQuery, artistsList, setArtist, setAlbum, addFav, removeFav };