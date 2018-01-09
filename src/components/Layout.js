import React from "react";
import { getSongData } from '../utils/api'
import { bindActioncreatores } from 'redux'
import { connect } from 'react-redux'
import { songDataReducer, videoReducer, looperReducer, chordsReducer } from '../reducers'
import VideoPlayer from './VideoPlayer'
import Timeline from './Timeline'
import Looper from './Looper'
import Progbar from './Progbar'
import Chords from './Chords'
import { setNewSongAction, seekVideoAction } from '../actions'

class Layout extends React.Component {

    componentDidMount() {
        getSongData(this.setData)

    }

    setData(data) {
        setNewSongAction(data)
    }

    render() {
        return (
            <div>
                <Timeline songdata={this.props.songdata} currentTime={this.props.currentVideoTime} song_duration={this.props.songdata.song.duration} />
                <VideoPlayer videoId={this.props.video.videoId} seekTo={this.props.video.seekTo} />
                <Chords current_chords={this.props.current_chords} />
                <Looper currentTime={this.props.currentVideoTime} startLoopTime={this.props.looper.startTime} endLoopTime={this.props.looper.endTime} looping={this.props.looper.looping} />
                <Progbar tot={this.props.songdata.song.duration} prog={this.props.currentVideoTime} seekCallback={this.seekVideo} />
                <div className="cursor"></div>
            </div>
        )
    }

    seekVideo(perc) {
        seekVideoAction(perc)
    }

}

function mapStateToProps(state) {
    return {
        video: state.video,
        songdata: state.songdata,
        currentVideoTime: state.video.currentTime,
        looper: state.looper,
        current_chords: state.current_chords.names
    }

}

export default connect(mapStateToProps)(Layout)