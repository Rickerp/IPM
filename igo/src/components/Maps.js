import React, { Component } from 'react'
import routes from "../RoutesInfo"

export default class Maps extends Component {
    state = {
        backgroundImage: `url(${routes[0].route2})`,
        backgroundPosition: '0% 0%'
    }
    
    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        this.setState({ backgroundPosition: `${x}% ${y}%` })
    }

    render() {
        return (
            <figure onMouseMove={this.handleMouseMove} style={this.state}>
                <img src={routes[0].route2} />
            </figure>
        )
    }
}
