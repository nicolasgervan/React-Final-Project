const ACCESS_TOKEN = "BQCAwZSNneLrPsyHqTO-IVFMsGqxHPTG-NofmS1Yh4GWleoSBNZtDM1UkIe5r0qmEdjwQXq_qaG0VbWANMOB7nVgEYQ_3iey0ZypJKuKNqZiaJOIkXmDP9hxznRpvu01TkjQBFBz1GiyNs8-ejcxVGgKvX0LLOA"

export default {
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