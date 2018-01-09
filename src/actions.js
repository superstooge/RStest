import store from './store'

export const setNewSongAction = (data) => {
    store.dispatch(
        {
            type: "NEW_SONG",
            payload: data
        }
    )
}

export const setStartLoopTimeAction = (time) => {
    store.dispatch(
        {
            type: "SET_START_LOOP",
            payload: time
        }
    )
}

export const setEndLoopTimeAction = (time) => {
    store.dispatch(
        {
            type: "SET_END_LOOP",
            payload: time
        }
    )
}

export const toggleLoopStatusAction = (loopStatus) => {
    store.dispatch(
        {
            type: "SET_LOOP_STATE",
            payload: loopStatus
        }
    )
}

export const currentChordsAction = (chords) => {
    store.dispatch(
        {
            type: "CURRENT_CHORDS",
            payload: chords
        }
    )
}

export const seekVideoAction = (percentage) => {
    store.dispatch(
        {
            type: "SEEK_VIDEO",
            payload: percentage
        }
    )
}

export const videoPlayingTimeAction = (mseconds) => {
    store.dispatch(
        {
            type: "VIDEO_PLAYING_TIME",
            payload: mseconds
        }
    )
}

