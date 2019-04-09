import React, { Component } from 'react'
import ArData from "../ArData"
import Draggable from 'react-draggable';
import styled from "styled-components"

export default class Ar extends Component {
  constructor() {
    super();
    this.state = {
        imgArray: ArData,
        currentImg: 0
    }
    this.changeImg = this.changeImg.bind(this)
  }

  changeImg() {
    this.setState(prevState => {
      let currentIndex = prevState.currentImg;

      if (currentIndex === prevState.imgArray.length - 1) {
        currentIndex = 0
      }
      else {
        currentIndex++
      }
      return {
        imgArray: prevState.imgArray,
        currentImg: currentIndex
      }
    })
  }

  render() {
    return (
      <div>
        <img style={{zoom: "100%", overflowX: "visible"}} src={this.state.imgArray[this.state.currentImg]} alt=""></img>
        <button onClick={this.changeImg}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    )
  }
}
