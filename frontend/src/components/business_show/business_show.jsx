import React from 'react';
import { connect } from 'react-redux';

import './business_show.css';
import { yelpBiz, yelpReviews, clearReviews } from '../../util/yelp_api_util.js';
import { getZomatoReviews } from '../../util/zomato_api_util.js';
import HeaderContainer from '../header/header_container';
import './business_show.css'
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
    const SEED_REVIEW = [
    {
      id: 1,
      user_image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/uQ3_iuhf4H8asAuNw0woYg/o.jpg",
      user_name:"Tim Song",
      text: "Taqueria Guadalajara is pretty good, with some great meat choices. My favorites so far have definitely been the grilled chicken and carnitas. The carne asada was also good, but just didn't stand out relative to all the other Mexican restaurants. The grilled chicken had a great flavor and a great grilled texture on the outside. The carnitas were also a bit crispy, and not just soft and soggy, which I prefer. Having crispy carnitas can often leave them tasting dry, but that wasn't the case at all here. The burritos are huge! The prices are a bit higher than what Im used to for a burrito, but the size and amount of meat comes close to justifying the price. I also liked the use of avocado slices in the burritos, as opposed to guacamole. The service is very quick and it doesnt take long to get your food, even when busy. The horchata here is also good, although a bit sweeter than Id personally like, but most of them are.I will say I was a bit disappointed with the salsa bar. Im not sure if it was just a fluke when I went, but there were really only three options when I went: red (tomato), green (tomatillo) and habanero. The red and green salsas were not spicy at all, but the habanero salsa was quite spicy, and I have a very high tolerance. I would have liked to see more variety of salsas.",
      rating: 4
    },
    {
      id: 2,
      user_image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/uQ3_iuhf4H8asAuNw0woYg/o.jpg",
      user_name:"Tim Song",
      text: "Taqueria Guadalajara is pretty good, with some great meat choices. My favorites so far have definitely been the grilled chicken and carnitas. The carne asada was also good, but just didn't stand out relative to all the other Mexican restaurants. The grilled chicken had a great flavor and a great grilled texture on the outside. The carnitas were also a bit crispy, and not just soft and soggy, which I prefer. Having crispy carnitas can often leave them tasting dry, but that wasn't the case at all here. The burritos are huge! The prices are a bit higher than what Im used to for a burrito, but the size and amount of meat comes close to justifying the price. I also liked the use of avocado slices in the burritos, as opposed to guacamole. The service is very quick and it doesnt take long to get your food, even when busy. The horchata here is also good, although a bit sweeter than Id personally like, but most of them are.I will say I was a bit disappointed with the salsa bar. Im not sure if it was just a fluke when I went, but there were really only three options when I went: red (tomato), green (tomatillo) and habanero. The red and green salsas were not spicy at all, but the habanero salsa was quite spicy, and I have a very high tolerance. I would have liked to see more variety of salsas.",
      rating: 4
    }
  ]

    // map over each business
    const mapReviews =
      SEED_REVIEW.map( review => {
        // debugger

            return(
              <div className="review-card-container" key={review.id}>
                <div className="review-card-image"><img src={review.user_image_url}/></div>
                <div className="review-card-detail">
                  <div className="review-card-name">{review.user_name}</div>
                  <div className="review-card-rating"><img src={`/images/stars/${review.rating}.png`}></img></div>
                  <div className="review-card-text">{review.text}</div>
                </div>
              </div>
            )
          })

    return(
      <div className="food-list-container-row">
        {mapReviews}
      </div>
    )
  }


  render(){
    const seedCity = "San Francisco"
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
