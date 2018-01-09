import React from 'react'
export default class Alert extends React.Component{
    componentWillUpdate(nextProps, nextState){
        if (nextProps.message !== this.props.message) {
            if (this.to) {
                clearTimeout(this.to)
            }
            this.show()
        }
    }
    render(){
        return(
            <div ref="alert" className="alert">{this.props.message}</div>
        )
    }

    show(){
        this.refs.alert.style.opacity = 1
        
        this.to = setTimeout(this.hide.bind(this), 8000)
    }
    hide(){
        this.refs.alert.style.opacity = 0
    }
}