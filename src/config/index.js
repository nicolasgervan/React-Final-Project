const config = {
    baseUrl : "https://api.spotify.com/v1/",
    options: {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        mode: 'cors',
        cache: 'default'
        }
}

export default config;