import React from 'react';
import { connect } from 'react-redux';

import './business_show.css';
import { yelpBiz, yelpReviews, clearReviews } from '../../util/yelp_api_util.js';
import { getZomatoReviews } from '../../util/zomato_api_util.js';
import HeaderContainer from '../header/header_container';
import './review.css'

const mapStateToProps = (state, ownProps) => {
  // foodItems: array of food objects
  // businesses: return an array we will map over of ALL businesses in our database

  // debugger
  const business = state.entities.search[ownProps.match.params.businessId]

  return({
    business: business,
    businessId: ownProps.match.params.businessId,
    reviews: state.entities.reviews
    // foodItems: this.state.business.food
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getBusiness: (id) => dispatch(yelpBiz(id)),
    getYelpReviews: (id) => dispatch(yelpReviews(id)),
    getZomatoReviews: (searchInfo) => dispatch(getZomatoReviews(searchInfo)),
    clearReviews: () => dispatch(clearReviews())

  })
}


class BusinessShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      previousBiz: {}
    }
  }

  componentDidMount(){
    const { business, getBusiness, businessId, reviews, getYelpReviews, clearReviews } = this.props;
    if (!business) {
      getBusiness(businessId)
      clearReviews()
    }

    if (business) {
      this.setState({previousBiz: business})
    }

    if (business && Object.keys(reviews.yelpReviews).length <= 0) {
      getYelpReviews(businessId)
    }

    if (business && Object.keys(reviews.zomatoReviews).length <= 0) {
      const { latitude, longitude } = business.coordinates;
      getZomatoReviews({q: business.name, lat: latitude, lon: longitude, count: 1})
    }
  }

  componentDidUpdate() {
    const { business, getBusiness, businessId, getYelpReviews, getZomatoReviews, reviews , clearReviews} = this.props;

    if (!business) {
      getBusiness(businessId)
    }

    if (business && this.state.previousBiz !== business) {
      this.setState({previousBiz: business})
      clearReviews()
    }

    if (business && Object.keys(reviews.yelpReviews).length <= 0) {
      getYelpReviews(businessId)
    }

    if (business && Object.keys(reviews.zomatoReviews).length <= 0) {
      const { latitude, longitude } = business.coordinates;
      getZomatoReviews({q: business.name, lat: latitude, lon: longitude, count: 1})
    }
  }
  componentWillUnmount(){
    this.props.clearReviews()
  }

  businessHeader(){
    if (this.props.business){

      return(
        <div id={this.props.business.id} className="business-show-header"
        style={{
          backgroundImage: `url(${this.props.business.image_url})`
        }}
        >
          <div className="business-show-detail-container">
          <div className="business-show-name"><a href={this.props.business.url}>{this.props.business.name}</a></div>
          <div className="business-show-detail">📍{this.props.business.location.address1}, {this.props.business.location.city} </div>
          <div className="business-show-detail">{this.props.business.price} · {this.props.business.categories[0].title} · ⭐{this.props.business.rating}</div>
          </div>
        </div>
      )
    }

  }


  reviewGrid(){
    // map over each business
    const mapYelp =
      this.props.reviews.yelpReviews.map( review => {
        // debugger

            return(
              <div className="review-card-container" key={review.id}>
                <div className="review-card-image"><img src={review.user.image_url}/></div>
                <div className="review-card-detail">
                  <div className="review-card-name">{review.user.name}</div>
                  <div className="review-card-rating"><img src={`/images/stars/${review.rating}.png`}></img></div>
                  <div className="review-card-text"><a href={review.url}>{review.text}</a></div>
                </div>
              </div>
            )
          })

    const mapZomato =
      this.props.reviews.zomatoReviews.user_reviews.map( review => {

            return(
              <div className="review-card-container" key={review.review.id}>
                <div className="review-card-image"><img src={review.review.user.profile_image}/></div>
                <div className="review-card-detail">
                  <div className="review-card-name">{review.review.user.name}</div>
                  <div className="review-card-rating"><img src={`/images/stars/${review.review.rating}.png`}></img></div>
                  <div className="review-card-text"><a href={review.review.user.profile_url}>{review.review.review_text}</a></div>
                </div>
              </div>
            )
          })

    return(
      <div className="food-list-container-row">
        {mapYelp}
        {mapZomato}
      </div>
    )
  }


  render(){
    const seedCity = "San Francisco"
    if (Object.keys(this.props.reviews.yelpReviews).length <= 0 ||
    Object.keys(this.props.reviews.zomatoReviews).length <= 0) {
      return null}
      return(
        <div className="business-show-page-container">
        {this.businessHeader()}
        <h1 className="business-show-index-title">Most Popular Reviews</h1>
        {this.reviewGrid()}
        <link href="css/hover.css" rel="stylesheet" media="all"/>
        </div>
      )


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
