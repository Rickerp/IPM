import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { slide as Slide } from 'react-burger-menu'

export default class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  render() {
    return (
      <Slide width={ '100px' }>
        <Link className="menu-item" to="/ar">
          <i class="fas fa-map-marked-alt"></i> &nbsp; MAPS
        </Link>

        <a className="menu-item" href="#">
          DICTIONARY
        </a>

        <a className="menu-item" href="#">
          SHAROUTE
        </a>

        <a className="menu-item" href="#">
          FRIENDS
        </a>
      </Slide>
    )
  }
}
