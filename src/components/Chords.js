import React from 'react'

export default class Looper extends React.Component {
    
    render(){
        return (
            <div className="chords-display">
                <div className='prev-chord'>{this.props.current_chords[0]}</div>
                <div className="current-chord" >{this.props.current_chords[1]}</div>
                <div className='prev-chord'>{this.props.current_chords[2]}</div>
            </div>
        )
    }

}