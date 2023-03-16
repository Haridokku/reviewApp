import {Component} from 'react'

import './index.css'

const idNumber = 0

class ReviewsCarousel extends Component {
  state = {id: idNumber}

  previousReview = () => {
    const {id} = this.state
    let number = id
    if (id === 0) {
      number = 0
    } else {
      number -= 1
    }
    this.setState({id: number})
  }

  forwardReview = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    let number = id
    if (id === reviewsList.length - 1) {
      number = reviewsList.length - 1
    } else {
      number += 1
    }
    this.setState({id: number})
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    return (
      <div className="app-container">
        <h1 className="head">Reviews</h1>
        <img
          src={reviewsList[id].imgUrl}
          alt={reviewsList[id].username}
          className="profile"
        />
        <div className="button-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.previousReview}
            className="left-arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="review">{reviewsList[id].username}</p>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.forwardReview}
            className="left-arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="description">{reviewsList[id].companyName}</p>
        <p className="description">{reviewsList[id].description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
