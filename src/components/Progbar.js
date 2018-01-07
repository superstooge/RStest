import React from 'react'

export default class Progbar extends React.Component {
    constructor() {
        super()
    }
    componentWillUpdate(nextProps, nextState) {
        let width = ((this.props.prog * 100) / this.props.tot)
        if (isNaN(width)) {
            width=0
        }
        this.progStyle = { width: width + '%' }
    }
    clickHandler(e){
        let perc = (e.clientX * 100)/document.defaultView.getComputedStyle(e.currentTarget, null).width.split('px')[0];
        this.props.seekCallback(perc)
    }
    render() {
        return (
            <div className="progbar"  onClick={this.clickHandler.bind(this)}>
                <div className="perc" style={this.progStyle} ></div>
            </div>
        )
    }
}