import React from 'react'
import YouTube from 'react-youtube'
import store from '../store'
const opts = {
    height: '390',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0
    }
};
var player, playinterval
export default class VideoPlayer extends React.Component {

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.seekTo !== this.props.seekTo) {
            player.seekTo(this.percentageToMs(nextProps.seekTo))
            store.dispatch(
                {
                    type: "VIDEO_PLAYING_TIME",
                    payload: this.percentageToMs(nextProps.seekTo)
                }
            )
        }
    }

    percentageToMs(perc) {
        let time = (player.getDuration() / 100) * perc
        //console.log(perc, '%', time);
        return time
    }

    render() {
        return (
            <div id="player">
                <YouTube
                    videoId={this.props.videoId}
                    opts={opts}
                    onReady={this._onReady.bind(this)}
                    onStateChange={this._onStateChange.bind(this)}
                />
            </div>
        )
    }

    enterFrame() {
        let time = player.getCurrentTime()
        store.dispatch(
            {
                type: "VIDEO_PLAYING_TIME",
                payload: time
            }
        )
        let state = store.getState()

        if (state.looper.looping && state.looper.startTime && state.looper.endTime) {
            if (time > state.looper.endTime || time < state.looper.startTime) {
                player.seekTo(state.looper.startTime)
            }
        }
    }

    _onStateChange(evt) {
        // console.log(evt.data);
        if (evt.data == 1) {
            playinterval = setInterval(this.enterFrame, 10)
        } else if (playinterval) {
            clearInterval(playinterval)
        }
    }

    _onReady(event) {
        player = event.target
    }
}