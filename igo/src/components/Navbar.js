import React, { Component } from 'react'
import Clock from 'react-live-clock';

export default class Navbar extends Component {
  render() {
    return (
        <div>
            <img className="pull-down" src="https://img.icons8.com/ios/50/000000/drag-list-down.png"></img>
            <Clock className="clock" format={'HH:mm ddd, MMM DD'} ticking={true} timezone={'Europe/Portugal'} /> 
            <p className="battery">
                1% &nbsp; 
                <i class="fas fa-battery-quarter"></i>
            </p>
        </div>
    )
  }
}
