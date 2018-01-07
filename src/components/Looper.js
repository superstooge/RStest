import React from 'react'
import store from '../store'


export default class Looper extends React.Component {
    constructor(){
        super()
        
    }
    render(){
        return (
            <div className="looper">
                <div className="button-looper" onClick={this.setStartLoopTime.bind(this, this.props.currentTime)}>{this.props.startLoopTime ? 'start at ' + Math.round(this.props.startLoopTime) + 's' : 'Click to set start loop time'}</div>
                <div className="button-looper" onClick={this.setEndLoopTime.bind(this, this.props.currentTime)}>{this.props.endLoopTime ? 'end at ' + Math.round(this.props.endLoopTime) + 's' : 'Click to set end loop time'}</div>&nbsp;
                <div className="button-looper" onClick={this.toggleLoopStatus.bind(this)}>{this.props.looping ? 'Looping...' : 'Loop section'}</div>
            </div>
        )
    }

    setStartLoopTime(time){        
        store.dispatch(
            {
                type:"SET_START_LOOP",
                payload:time
            }
        )
    }
    setEndLoopTime(time){
        
        if (this.props.startLoopTime > time) {
            return
        }
        store.dispatch(
            {
                type:"SET_END_LOOP",
                payload:time
            }
        )
    }
    toggleLoopStatus(){
        store.dispatch(
            {
                type:"SET_LOOP_STATE",
                payload:0
            }
        )
    }
}