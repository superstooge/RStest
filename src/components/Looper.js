import React from 'react'
import {setStartLoopTimeAction, setEndLoopTimeAction, toggleLoopStatusAction} from '../actions'

export default class Looper extends React.Component {

    render() {
        return (
            <div className="looper-wrapper">
                <div className="looper-info">Click on the buttons below during song playback to set start/end loop time. </div>
                <div className="looper">
                    <div className="button-looper" onClick={this.setStartLoopTime.bind(this, this.props.currentTime)}>{this.props.startLoopTime ? 'start at ' + Math.round(this.props.startLoopTime) + 's' : 'Click to set loop start time'}</div>
                    <div className="button-looper" onClick={this.setEndLoopTime.bind(this, this.props.currentTime)}>{this.props.endLoopTime ? 'end at ' + Math.round(this.props.endLoopTime) + 's' : 'Click to set loop end time'}</div>&nbsp;
                <div className={this.loopingButtonStyle()} onClick={this.toggleLoopStatus.bind(this)}>{this.props.looping ? 'Looping...' : 'Loop section'}</div>
                </div>
            </div>
        )
    }

    loopingButtonStyle() {
        if (this.props.startLoopTime == null || this.props.endLoopTime == null) {
            return 'button-looper disabled'
        } else {
            if (this.props.looping) {
                return ' button-looper-looping button-looper'
            } else {
                return '  button-looper'
            }

        }
    }

    setStartLoopTime(time) {
        if (this.props.endLoopTime && this.props.endLoopTime < time) {
            return
        }
        setStartLoopTimeAction(time)
    }

    setEndLoopTime(time) {
        if (this.props.startLoopTime && this.props.startLoopTime > time) {
            return
        }
        setEndLoopTimeAction(time)
    }

    toggleLoopStatus() {
        if (this.props.startLoopTime == null || this.props.endLoopTime == null) {
            return
        }
        toggleLoopStatusAction(!this.props.looping)
    }
}