import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { slide as Slide } from 'react-burger-menu'
import rita from "../Rita.png"
import styled from "styled-components"

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <Slide isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} width={'180px'}>
        <ProfileCard>
          <p className="card-name">Rita Sousa</p>
          <img className="card-avatar" src={rita} alt="Avatar"></img>
        </ProfileCard>

        <Link onClick={() => this.closeMenu()} className="menu-item" to="/ar">
          <i class="fas fa-map-marked-alt"></i> &nbsp; MAPS
        </Link>

        <a className="menu-item" href="/">
          <i class="fas fa-language"></i> &nbsp; DICTIONARY
        </a>

        <a className="menu-item" href="/">
          <i class="fas fa-route"></i> &nbsp; SHAROUTE
        </a>

        <a className="menu-item" href="/">
          <i class="fas fa-user-friends"></i> &nbsp; FRIENDS
        </a>
      </Slide>
    )
  }
}

const ProfileCard = styled.div`
  position: relative!important;
  display: grid!important;
  grid-gap: 5px!important;
  grid-template-columns: 10px 120px!important;
  grid-template-rows: 30px 10px 5px!important;
  grid-template-areas: 
      "card-avatar card-name"
      ". ."
      ". ."!important;
  top: -10px;
  border-bottom: 0.1px solid white;
`
