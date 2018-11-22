
function fetchSearchArtists(artist,config){
    const url = config.baseUrl + "search?q=" + artist + "&type=artist"
    return fetchData(url,config); 
}

function fetchArtist(idArtist,config){
    const url = config.baseUrl + "artists/" + idArtist; 
    return fetchData(url,config); 
}

function fetchArtistAlbums(idArtist,config){
    const url = config.baseUrl + "artists/" + idArtist + "/albums?include_groups=single%2Calbum&market=ES&limit=25"; 
    return fetchData(url,config); 
}

function fetchAlbum(idAlbum,config){
    const url = config.baseUrl + "albums/" + idAlbum; 
    return fetchData(url,config); 
}

function fetchAlbumTracks(idAlbum,config){
    const url = config.baseUrl + "albums/" + idAlbum + "/tracks"; 
    return fetchData(url,config); 
}

function fetchData(url,config){
    return fetch(url, config.options)
        .then(response => response.json())
        .then(data => {return data})
    .catch(error => console.error(error)) 
}

export { fetchSearchArtists, fetchArtist , fetchArtistAlbums, fetchAlbum , fetchAlbumTracks}