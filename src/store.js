import {createStore} from 'redux';
import {combineReducers} from 'redux'
import {songDataReducer, videoReducer, looperReducer, chordsReducer} from './reducers'
const store = createStore(
    combineReducers(
        {
            songdata:songDataReducer, 
            video: videoReducer,
            looper: looperReducer,
            current_chords: chordsReducer
        }
    ),
    {
        video:{
            videoId:'oKsxPW6i3pM',
            currentTime:0,
            seekTo:0
        },
        songdata: {
            song:{
                song_events:[]
            }
        },
        looper:{
            startTime:null,
            endTime:null,
            looping:false
        },
        current_chords:{
            names:['', '', '']
        }
    }
);

store.subscribe(
    () => {
        // console.log('store changed', store.getState());
        
    }
)
export default store