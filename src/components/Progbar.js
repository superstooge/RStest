import React from 'react'

export default class Progbar extends React.Component {
    constructor() {
        super()
        this.seeking = false
    }
    componentWillUpdate(nextProps, nextState) {
        if (this.seeking) {
            return
        }
        let width = ((this.props.prog * 100) / this.props.tot)
        if (isNaN(width)) {
            width = 0
        }
        this.progStyle = { width: width + '%' }
    }
    startSeek(evt) {
        this.seeking = true;
        evt.currentTarget.addEventListener('mousemove', this.seek.bind(this))

    }
    stopSeek(evt) {
        this.seeking = false;
        evt.currentTarget.removeEventListener('mousemove', this.seek.bind(this))
        let perc = (evt.clientX * 100) / document.defaultView.getComputedStyle(evt.currentTarget, null).width.split('px')[0];
        this.props.seekCallback(perc)
    }

    seek(evt) {
        console.log('seeking');
        let perc = (evt.clientX * 100) / document.defaultView.getComputedStyle(evt.currentTarget, null).width.split('px')[0];
        this.progStyle = { width: perc + '%' }
    }
    render() {
        return (
            <div className="progbar" onMouseDown={this.startSeek.bind(this)}  onMouseUp={this.stopSeek.bind(this)}>
                <div className="perc" style={this.progStyle} ></div>
            </div>
        )
    }
}