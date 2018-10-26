import React from 'react';
import { connect } from 'react-redux';
import './index.css'
import HeaderContainer from '../header/header_container';
const mapStateToProps = state => {
  // city: return name of city we're looking for
  //businesses: return an array we will map over of ALL businesses in our database
  return({
    // city: this.state.city,
    // businesses: this.state.businesses
  })
}



class IndexPage extends React.Component {

  componentDidMount() {
    const { location, search, yelpSearch } = this.props;
    const searchInfo = {term: 'pizza', location: location, limit: 5}

    if (Object.keys(search).length <= 0 ) {
      yelpSearch(searchInfo)
    }
  }

  bizCategories(biz) {

    // {biz.categories.map(category => category.title)}
    return (
      <div className="business-card-categories">
      {biz.categories.map((category, idx) => {
        {if (idx != biz.categories.length - 1) {
          return `${category.title} · `
        } else {
          return `${category.title}`
        }}
      })}
      </div>
    )
    // biz.categories.map((category, idx) => {
    //   if (idx != biz.categories.length) {
    //     return `${category.title} · `
    //   } else {
    //     return `${category.title}`
    //   }
    // })
    //
    // debugger;
  }


  businessGrid() {

    const { search } = this.props;


    const mapBusinesses =
      Object.values(search).map(business => {
        this.bizCategories(business)
            return(
              <div className="business-card-container-column" key={business.id}>
                <div className="business-card-image"><img src={business.image_url}/></div>
                <div className="business-card-name">{business.name}</div>
                {this.bizCategories(business)}
                <div className="business-card-rating">
                  <img src={`/images/stars/${business.rating}.png`}></img>
                  <span>({business.review_count})</span>
                </div>
              </div>
        )
      })

    return(
      <div className="business-list-container-row">
        {mapBusinesses}
      </div>
    )
  }


  render(){
    const seedCity = "San Francisco"
    return <div className="index-page-container">
        <HeaderContainer />
        <h1 className="index-title">Food Delivery in {seedCity}</h1>
        {this.businessGrid()}
        <link href="css/hover.css" rel="stylesheet" media="all" />
      </div>;
  }
}

//   const seedData = [
//   {
//     id: 1,
//     image: "https://www.straight.com/files/v3/styles/gs_large/public/images/18/01/mcds_c._uber_eats.jpg?itok=lEd7_yS1",
//     name: "McDonald's",
//     price: "$",
//     cuisines: "American",
//     rating: 4.4
//   },
//   {
//     id: 2,
//     image: "https://duyt4h9nfnj50.cloudfront.net/resized/2926d161670705623b4940e66693904b-w640-b3.jpg",
//     name: "The Posh Bagel",
//     price: "$",
//     cuisines: "Breakfast and Brunch",
//     rating: 4.7
//   },
//   {
//     id: 3,
//     image: "https://duyt4h9nfnj50.cloudfront.net/resized/70f60c3fc92c8b234d34eb9ad12c6a80-w2880-49.jpg",
//     name: "The Halal Guys",
//     price: "$$",
//     cuisines: "Halal",
//     rating: 4.6
//   },
//   {
//     id: 4,
//     image: "https://duyt4h9nfnj50.cloudfront.net/resized/70f60c3fc92c8b234d34eb9ad12c6a80-w2880-49.jpg",
//     name: "The Halal Guys",
//     price: "$$",
//     cuisines: "Halal",
//     rating: 4.6
//   },
//   {
//     id: 5,
//     image: "https://duyt4h9nfnj50.cloudfront.net/resized/70f60c3fc92c8b234d34eb9ad12c6a80-w2880-49.jpg",
//     name: "The Halal Guys",
//     price: "$$",
//     cuisines: "Halal",
//     rating: 4.6
//   }
// ];

// <div className="business-card-detail">💰{business.price} · {business.rating} · ⭐{business.review_count}</div>

  // const mapBusinesses =
  //   seedData.map( business => {
  //         return(
  //           <div className="business-card-container-column" key={business.id}>
  //             <div className="business-card-image"><img src={business.image}/></div>
  //             <div className="business-card-name">{business.name}</div>
  //             <div className="business-card-detail">💰{business.price} · {business.cuisines} · ⭐{business.rating}</div>
  //           </div>
  //     )
  //   })


export default connect(mapStateToProps, null)(IndexPage);
