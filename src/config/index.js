const ACCESS_TOKEN = localStorage.getItem('token');

const config = {
    baseUrl : "https://api.spotify.com/v1/",
    options: {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN
        },
        mode: 'cors',
        cache: 'default'
        }
}

export default config;