import React from 'react'
import { playStatusAction } from '../actions'

export default class PlayPause extends React.Component {
    checkPlayStatus() {
        if (this.props.playStatus === 1) {
            return <img src="../images/pause.svg" />
        } else {
            return <img src="../images/play.svg" />
        }
    }

    togglePlayStatus(){
        playStatusAction(this.props.playStatus === 1 ? 2 : 1)
    }

    render() {
        return (
            <div className="playpause" onClick={this.togglePlayStatus.bind(this)}>
                {
                    this.checkPlayStatus()
                }
            </div>
        )
    }
}