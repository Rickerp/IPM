import React, { Component } from 'react'

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: props.rating
        };
    }


    ratingStars = (rating) => {
        if (rating === 0) {
            return <>
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />
            </>
        } else if (rating === 1) {
            return <>
                <i className="fas fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />
            </> 
        } else if (rating === 2) {
            return <>
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />
            </> 
        } else if (rating === 3) {
            return <>
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="far fa-star" />{" "}
                <i className="far fa-star" />
            </> 
        } else if (rating === 4) {
            return <>
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="far fa-star" />
            </> 
        } else if (rating === 5) {
            return <>
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />{" "}
                <i className="fas fa-star" />
            </> 
        }
    } 

    render() {
        return (
            <>
                {this.ratingStars(this.state.rating)}
            </>
        )
    }
}
