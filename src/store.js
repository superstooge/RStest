import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { songDataReducer, videoReducer, looperReducer, chordsReducer, messageReducer } from './reducers'

const allReducers = combineReducers(
    {
        songdata: songDataReducer,
        video: videoReducer,
        looper: looperReducer,
        current_chords: chordsReducer,
        message: messageReducer
    }
)
const store = createStore(
    allReducers,
    {
        video: {
            videoId: 's88r_q7oufE',
            currentTime: 0,
            seekTo: 0,
            playStatus:0
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
        },
        message:{
            text:''
        }
    }
);


export default store
