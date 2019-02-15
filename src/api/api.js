import config from '../config';
import store from '../store.js';
import { fetchingData } from '../actionCreators.js';

function fetchSearchArtists(artist){
    const url = config.baseUrl + "search?q=" + artist + "&type=artist"
    return fetchData(url,config); 
}

function fetchArtist(idArtist){
    const url = config.baseUrl + "artists/" + idArtist; 
    return fetchData(url,config); 
}

function fetchArtistAlbums(idArtist){
    const url = config.baseUrl + "artists/" + idArtist + "/albums?include_groups=single%2Calbum&market=ES&limit=25"; 
    return fetchData(url,config); 
}

function fetchAlbum(idAlbum){
    const url = config.baseUrl + "albums/" + idAlbum; 
    return fetchData(url,config); 
}

function fetchAlbumTracks(idAlbum){
    const url = config.baseUrl + "albums/" + idAlbum + "/tracks"; 
    return fetchData(url,config); 
}

function fetchFavTracks(ids){
    const url = config.baseUrl + "tracks/?ids=" + ids.toString(); 
    return fetchData(url,config); 
}

function fetchData(url,config){
    config.options.headers = {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
    store.dispatch(fetchingData(true))
    return fetch(url, config.options)
        .then(response => response.json())
        .then(data => {
            store.dispatch(fetchingData(false))
            return data
        })
    .catch(error => {
        console.error(error)
        store.dispatch(fetchingData(false))
    }) 
}

export { fetchSearchArtists, fetchArtist , fetchArtistAlbums, fetchAlbum , fetchAlbumTracks, fetchFavTracks}