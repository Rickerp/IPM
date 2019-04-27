import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { slide as Slide } from 'react-burger-menu'
import rita from "../Rita.png"
import styled from "styled-components"

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      languagesOpen: false
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

  toggleLanguages() {
    this.setState({languagesOpen: !this.state.languagesOpen})
  }

  render() {
    return (
      <SlideWrapper isOpen={this.state.menuOpen}>
        <Slide isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} width={'180px'}>
          <ProfileCard>
            <p className="card-name">Rita Sousa</p>
            <img className="card-avatar" src={rita} alt="Avatar"></img>
          </ProfileCard>

          <Link onClick={() => this.closeMenu()} className="menu-item" to="/ar">
            <i class="fas fa-map-marked-alt"></i> &nbsp; MAPS
          </Link>

          <a className="menu-item" href="#" onClick={() => this.toggleLanguages()}>
            <i class="fas fa-language"></i> &nbsp; LANGUAGES {this.state.languagesOpen ? <i className="fas fa-sort-up menu-up"></i> : <i className="fas fa-sort-down menu-down"></i>}
          </a>

          {this.state.languagesOpen ? <Link onClick={() => this.closeMenu()} className="menu-item" to="/dictionary">
            <i class="fas fa-book"></i> &nbsp; DICTIONARY
          </Link> : <span></span>}

          {this.state.languagesOpen ? <Link onClick={() => this.closeMenu()} className="menu-item" to="/translator">
            <i class="fas fa-sign-language"></i> &nbsp; TRANSLATOR
          </Link> : <span></span>}

          <a className="menu-item" href="/">
            <i class="fas fa-route"></i> &nbsp; SHAROUTE
          </a>

          <a className="menu-item" href="/">
            <i class="fas fa-user-friends"></i> &nbsp; FRIENDS
          </a>
        </Slide>
      </SlideWrapper>
    )
  }
}

const SlideWrapper = styled.div`
  /* Individual item */
  .bm-item {
    display: inline-block;

    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 15px;
    color: white;
    transition: color 0.2s;
  }

  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }

  .bm-item:focus {
    outline: none;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 13px;
    height: 9px;
    top: 8px;
    left: 3px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    display: ${props => props.isOpen ? 
    "flex" : "none"};
    background: white;
    zoom: 90% !important;
    margin-left: 5px;
  }

  /* General sidebar styles */
  .bm-menu {
    display: ${props => props.isOpen ? 
    "flex" : "none"};
    background: rgba(0, 0, 0, 0.9);
    padding: 4em 1.0em 0;
    font-size: 100%;
    font-weight: 500;
    height: 371px !important;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    width: 230px !important;
    height: 371px !important;
  }
`

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
