export function getSongData(cb) {
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

    fetch('http://localhost:3001/data/oKsxPW6i3pM')
    //fetch('../data/songjson.json')
    .then(status)
    .then(json)
    .then(cb)
    .catch(
        (error) => {
            console.log('Error fetching song data!', error);
        }
    )
}