export const songDataReducer = (state = {}, action) => {
    if (action.type === "NEW_SONG") {
        state = {...state, song: action.payload.song}
    }
    return state 
}

export function looperReducer(state={}, action) {
    if (action.type === "SET_START_LOOP") {
        state = {...state, startTime:action.payload}
    }
    if (action.type === "SET_END_LOOP") {
        state = {...state, endTime:action.payload}
    }
    if (action.type === "SET_LOOP_STATE") {
        state = {...state, looping:!state.looping}
    }
    
    return state 
}

export const videoReducer = (state = {}, action) => {
    if (action.type === "NEW_VIDEO") {
        state = {...state, videoId:action.payload}
    }
    if (action.type === "VIDEO_PLAYING_TIME") {
        state = {...state, currentTime:action.payload}
    }
    if (action.type === "SEEK_VIDEO") {
        state = {...state, seekTo:action.payload}
    }

    return state 
}