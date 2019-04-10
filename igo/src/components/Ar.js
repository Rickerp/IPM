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
        <Image style={{ zoom: "100%", overflowX: "visible" }} src={this.state.imgArray[this.state.currentImg]} alt=""></Image>
        <PreviousButton onClick={this.changeImg}>
          <i class="fas fa-arrow-left"></i>
        </PreviousButton>
        <NextButton onClick={this.changeImg}>
          <i className="fas fa-arrow-right"></i>
        </NextButton>
      </div>
    )
  }
}

const PreviousButton = styled.button`
  position: absolute;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  width: 50px;
  margin-left: 5px;
  margin-top: 165px;
`

const NextButton = styled.button`
  position: absolute;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  width: 50px;
  margin-left: 95px;
  margin-top: 165px;
`

const Image = styled.img`
  margin-top: -19px;
`
