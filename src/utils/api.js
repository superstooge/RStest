export function getSongData(videoId, cb) {
    function status(response) {
        if (response.ok) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    function json(response) {
        return response.json()
    }

    fetch('http://localhost:3001/data/'+videoId)
    //fetch('../data/songjson.json')
    .then(status)
    .then(json)
    .then(cb)
    .catch(
        (error) => {
            console.log('Error fetching song data!', error);
            cb('There was an error fetching song data. Make sure the server is up and running [npm run server]')
        }
    )
}
