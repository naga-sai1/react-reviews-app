import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    indexNo: 0,
  }

  onPrevReview = () => {
    const {indexNo} = this.state

    if (indexNo > 0) {
      this.setState(prevState => ({indexNo: prevState.indexNo - 1}))
    }
  }

  onNextReview = () => {
    const {reviewsList} = this.props
    const {indexNo} = this.state

    if (indexNo < reviewsList.length - 1) {
      this.setState(prevState => ({indexNo: prevState.indexNo + 1}))
    }
  }

  render() {
    const {indexNo} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[indexNo]

    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="user-container">
          <button
            type="button"
            className="btn"
            data-testid="leftArrow"
            onClick={this.onPrevReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="details-container">
            <img src={imgUrl} alt={username} className="profile" />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="company-description">{description}</p>
          </div>
          <button
            type="button"
            className="btn"
            data-testid="rightArrow"
            onClick={this.onNextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
