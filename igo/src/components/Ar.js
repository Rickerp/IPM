import React, { Component } from "react";
import ArData from "../ArData";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

export default class Ar extends Component {
  constructor() {
    super();
    this.state = {
      imgArray: ArData,
      currentImg: 0
    };
    this.icon = "img/aricon.png";
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  nextImage() {
    this.setState(prevState => {
      let currentIndex = prevState.currentImg;

      if (currentIndex === prevState.imgArray.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      return {
        imgArray: prevState.imgArray,
        currentImg: currentIndex
      };
    });
  }

  prevImage() {
    this.setState(prevState => {
      let currentIndex = prevState.currentImg;

      if (currentIndex === 0) {
        currentIndex = prevState.imgArray.length - 1;
      } else {
        currentIndex--;
      }
      return {
        imgArray: prevState.imgArray,
        currentImg: currentIndex
      };
    });
  }

  render() {
    return (
      <Spring 
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 100, duration: 1000 }}
      >
        {(props) => <div style={props}>
          <img
            style={{
              position: "absolute",
              float: "right",
              right: "5px",
              width: "50px",
              zoom: "70%"
            }}
            src={this.icon}
            alt=""
          />
          <Image
            style={{ zoom: "70%", overflowX: "hidden" }}
            src={this.state.imgArray[this.state.currentImg]}
            alt=""
          />
          <PreviousButton onClick={this.prevImage}>
            <i className="fas fa-arrow-left" />
          </PreviousButton>
          <NextButton onClick={this.nextImage}>
            <i className="fas fa-arrow-right" />
          </NextButton>
        </div>}
      </Spring>
    );
  }
}

const PreviousButton = styled.button`
  position: absolute;
  top: 330px;
  left: 5px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  width: 50px;
`;

const NextButton = styled.button`
  position: absolute;
  top: 330px;
  float: right;
  right: 5px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  width: 50px;
`;

const Image = styled.img`
  margin-top: -19px;
`;
