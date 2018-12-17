import config from '../config';

function fetchSearchArtists(artist){
    const url = config.baseUrl + "search?q=" + artist + "&type=artist"
    return fetchData(url); 
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

function fetchData(url){
    return fetch(url, config.options)
        .then(response => response.json())
        .then(data => {return data})
    .catch(error => console.error(error)) 
}

export { fetchSearchArtists, fetchArtist , fetchArtistAlbums, fetchAlbum , fetchAlbumTracks, fetchFavTracks}