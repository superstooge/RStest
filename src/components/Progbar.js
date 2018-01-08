import React from 'react'

export default class Progbar extends React.Component {
    componentWillUpdate(nextProps, nextState) {
        let width = ((this.props.prog * 100) / this.props.tot)
        if (isNaN(width)) {
            width = 0
        }
        this.progStyle = { width: width + '%' }
    }

    seek(evt) {
        let perc = (evt.clientX * 100) / document.defaultView.getComputedStyle(evt.currentTarget, null).width.split('px')[0];
        this.props.seekCallback(perc)
        this.progStyle = { width: perc + '%' }
    }


    render() {
        return (
            <div className="progbar" onMouseUp={this.seek.bind(this)}>
                <div className="perc" style={this.progStyle} ></div>
            </div>
        )
    }
}