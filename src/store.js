import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { songDataReducer, videoReducer, looperReducer, chordsReducer } from './reducers'

const allReducers = combineReducers(
    {
        songdata: songDataReducer,
        video: videoReducer,
        looper: looperReducer,
        current_chords: chordsReducer
    }
)
const store = createStore(
    allReducers,
    {
        video: {
            videoId: 'oKsxPW6i3pM',
            currentTime: 0,
            seekTo: 0
        },
        songdata: {
            song: {
                song_events: []
            }
        },
        looper: {
            startTime: null,
            endTime: null,
            looping: false
        },
        current_chords: {
            names: ['', '', '']
        }
    }
);

// store.subscribe(
//     () => {
//     }
// )
export default store