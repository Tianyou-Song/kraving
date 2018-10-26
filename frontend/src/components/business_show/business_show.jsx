import React from 'react';
import { connect } from 'react-redux';
import './business_show.css'
import { yelpBiz } from '../../util/yelp_api_util.js'

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
    // this.state = { this.props.business }
    // console.log(this.state);
    // debugger
  }

  componentDidMount(){
    this.props.getBusiness("__I9HmtBMV4dDkEgT22V4g")

    // debugger
    // this.props.getBusiness(this.props.match.params.businessId)
  }


  businessHeader(){

    // debugger
    // <div className="business-show-name">{this.props.business.name}</div>
    if (this.props.business){

      return(
        <div id={this.props.business.id} className="business-show-header">
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

    const SEED_FOOD = [
    {
      id: 1,
      image: "http://www.tficanada.com/wordpress/wp-content/uploads/2017/02/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals-1.png",
      name: "Double Quarter with Cheese Meal",
      price: "$10.50",
      calories: 875,
      rating: 4.4
    },
    {
      id: 2,
      image: "https://www.mcdonalds.com/content/dam/usa/nutrition/items/evm/h-mcdonalds-Big-Mac-Extra-Value-Meals.jpg",
      name: "Big Mac Meal",
      price: "$10.08",
      calories: 1120,
      rating: 4.8
    },
    {
      id: 3,
      image: "https://www.unilad.co.uk/wp-content/uploads/2015/09/UNILAD-Screen-Shot-2015-09-16-at-18.45.355.png",
      name: "20 McNuggets Meal",
      price: "$8.59",
      calories: 675,
      rating: 4.7
    },
    {
      id: 4,
      image: "https://s3-media4.fl.yelpcdn.com/bphoto/RH0rP7ArmGdWBXno6GZfXw/o.jpg",
      name: "Crispy Buttermilk Chicken Meal",
      price: "$9.78",
      calories: 825,
      rating: 3.9
    },
    {
      id: 5,
      image: "https://s3-media2.fl.yelpcdn.com/bphoto/jKVd9qKfWtRszoVZD2vPdg/o.jpg",
      name: "Grilled Artisan Chicken Meal",
      price: "$10.08",
      calories: 978,
      rating: 4.9
    },
    {
      id: 6,
      image: "https://www.mcdonalds.com/content/dam/usa/documents/glazedtenders/2018/6-piece.jpg",
      name: "6 Piece Glazed Chicken Tenders Meal",
      price: "$11.64",
      calories: 970,
      rating: 4.5
    },

  ];

    // map over each business
    const mapFoods =
      SEED_FOOD.map( food => {
        // debugger
            return(
              <div className="food-card-container-column" key={food.id}>
                <div className="food-card-image"><img src={food.image}/></div>
                <div className="food-card-name">{food.name}</div>
                <div className="food-card-detail">💰{food.price} · {food.calories} Cal · ⭐{food.rating}</div>
              </div>
            )
          })

    return(
      <div className="food-list-container-row">
        {mapFoods}
      </div>
    )
  }


  render(){
    const seedCity = "San Francisco"
    return(
      <div className="business-show-page-container">
        {this.businessHeader()}
        <h1 className="index-title">Most Popular</h1>
        {this.foodGrid()}
        <link href="css/hover.css" rel="stylesheet" media="all"/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
