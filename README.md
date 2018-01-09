# RStest

## Dependencies ##

    "babel-core": "^6.17.0"
    "babel-loader": "^6.2.0"
    "babel-preset-es2015": "^6.3.13"
    "babel-preset-react": "^6.24.1"
    "express": "^4.16.2"
    "node-fetch": "^1.7.3"
    "react": "^0.14.6"
    "react-dom": "^0.14.6"
    "react-redux": "^5.0.6"
    "react-youtube": "^7.5.0"
    "redux": "^3.7.2"
    "webpack": "^1.12.9"
    "webpack-dev-server": "^1.14.1"
  
## Dev Dependencies ##
    "babel-plugin-transform-object-rest-spread": "^6.26.0"
  
  
  ## installation and start ##
  1. clone the repo and enter the `RStest` directory
  2. `npm install`
  3. open two terminal windows and launch the following commands:
        1. `npm run server`   (first window)
        2. `npm start`        (second window)
  4. navigate to `http://localhost:9000`


## App overview ##
* NodeJS version: 8.9.1
* The frontent application is built with ReactJS and Redux
* The root component is `Layout.js`
* The `videoId` variable can be set in `store.js`, to load a different song
* In order to avoid the cross-origin limitations calling the riffstation api, a minimal Express app is running as proxy server. The `npm run server` command starts the proxy and fetches the api data, upon request of the frontend.
* The request template url is `http://localhost:3001/data/<video_id>`
* RiffStation endpoint is `https://play.riffstation.com/api/mir/songs?source=youtube&source_id=<video_id>`

## Features ##
* Custom playback controls
* Chords timeline
* Current/previous/next chord panel
* Loop panel: it is possible to loop a specific section of the song, by setting start/end time
