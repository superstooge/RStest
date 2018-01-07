export function getSongData(cb) {
    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    function json(response) {
        return response.json()
    }


    // https://play.riffstation.com/api/mir/songs?source=youtube&source_id=oKsxPW6i3pM
    //fetch('https://play.riffstation.com/api/mir/songs?source=youtube&source_id=' + videoId, {mode: 'cors'})
    fetch('../data/songjson.json')
    .then(status)
    .then(json)
    .then(cb)
    .catch('Error fetching song data!')
}