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
    this.nextImage = this.nextImage.bind(this)
    this.prevImage = this.prevImage.bind(this)
  }

  nextImage() {
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

  prevImage() {
    this.setState(prevState => {
      let currentIndex = prevState.currentImg;

      if (currentIndex === 0) {
        currentIndex = prevState.imgArray.length - 1
      }
      else {
        currentIndex--
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
        <Image style={{ zoom: "100%", overflowX: "hidden" }} src={this.state.imgArray[this.state.currentImg]} alt=""></Image>
        <PreviousButton onClick={this.prevImage}>
          <i class="fas fa-arrow-left"></i>
        </PreviousButton>
        <NextButton onClick={this.nextImage}>
          <i className="fas fa-arrow-right"></i>
        </NextButton>
      </div>
    )
  }
}

const PreviousButton = styled.button`
  position: absolute;
  top:200px;
  left:5px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  width: 50px;
`

const NextButton = styled.button`
  position: absolute;
  top: 200px;
  float: right;
  right: 5px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  width: 50px;
`

const Image = styled.img`
  margin-top: -19px;
`
