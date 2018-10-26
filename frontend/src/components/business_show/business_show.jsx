import React from 'react';
import { connect } from 'react-redux';
import './business_show.css'
import { yelpBiz } from '../../util/yelp_api_util.js'
import HeaderContainer from '../header/header_container';

const mapStateToProps = (state, ownProps) => {
  // foodItems: array of food objects
  // businesses: return an array we will map over of ALL businesses in our database
  // debugger
  return({
    business: state.entities.search[ownProps.match.params.businessId]
    // foodItems: this.state.business.food
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getBusiness: (id) => dispatch(yelpBiz(id))
  })
}


class BusinessShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // this.props.getBusiness("__I9HmtBMV4dDkEgT22V4g")

    // debugger
    this.props.getBusiness(this.props.match.params.businessId)
  }

  componentDidUpdate() {
    if (!this.props.business) {
      this.props.getBusiness(this.props.match.params.businessId)
    }
  }


  businessHeader(){

    // debugger
    // <div className="business-show-name">{this.props.business.name}</div>
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


  foodGrid(){

    const SEED_REVIEW = [
    {
      id: 1,
      // image: "http://www.tficanada.com/wordpress/wp-content/uploads/2017/02/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals-1.png",
      user_image_url: "http://www.tficanada.com/wordpress/wp-content/uploads/2017/02/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals-1.png",
      user_name:"Tim Song",
      text: "Taqueria Guadalajara is pretty good, with some great meat choices. My favorites so far have definitely been the grilled chicken and carnitas. The carne asada was also good, but just didn't stand out relative to all the other Mexican restaurants. The grilled chicken had a great flavor and a great grilled texture on the outside. The carnitas were also a bit crispy, and not just soft and soggy, which I prefer. Having crispy carnitas can often leave them tasting dry, but that wasn't the case at all here. The burritos are huge! The prices are a bit higher than what Im used to for a burrito, but the size and amount of meat comes close to justifying the price. I also liked the use of avocado slices in the burritos, as opposed to guacamole. The service is very quick and it doesnt take long to get your food, even when busy. The horchata here is also good, although a bit sweeter than Id personally like, but most of them are.I will say I was a bit disappointed with the salsa bar. Im not sure if it was just a fluke when I went, but there were really only three options when I went: red (tomato), green (tomatillo) and habanero. The red and green salsas were not spicy at all, but the habanero salsa was quite spicy, and I have a very high tolerance. I would have liked to see more variety of salsas.",
      rating: 4

      // price: "$10.50",
      // calories: 875,
      // rating: 4.4
    }]



    // map over each business
    const mapReviews =
      SEED_REVIEW.map( review => {
        // debugger
            return(
              <div className="review-card-container-column" key={review.id}>
                <div className="review-card-image"><img src={review.user_image_url}/></div>
                <div className="review-card-name">{review.user_name}</div>
                <div className="review-card-text">{review.text}</div>
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
    debugger;
    const seedCity = "San Francisco"
    return(
      <div className="business-show-page-container">
      <HeaderContainer />
        {this.businessHeader()}
        <h1 className="index-title">Most Popular</h1>
        {this.foodGrid()}
        <link href="css/hover.css" rel="stylesheet" media="all"/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
