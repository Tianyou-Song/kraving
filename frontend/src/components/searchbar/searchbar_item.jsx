import React from 'react';
import SearchItemCSS from './searchbar_item.css'

class SearchBarItem extends React.Component {

  render() {
    const { bus, formType, loc } = this.props;
    debugger;

    if (formType === 'yelp') {
      return (
        <div className="search-dropdown-item">
          <div>
            <img className="search-dropdown-image" src={bus.image_url} />
          </div>
          <div className="search-dropdown-text">
            <li className="search-dropdown-title">{bus.name}</li>
            <div className="search-dropdown-stars">
              <img className="search-stars"src={`/images/stars/${bus.rating}.png`}></img>
              <li className="search-review-count">({bus.review_count})</li>
            </div>
          </div>
        </div>
      )
    } else if (formType === 'google') {
      return (
        <div className="search-dropdown-item">
          <div className="search-dropdown-text">
            <li className="search-dropdown-title">{loc.description}</li>
          </div>
        </div>
      )
    }

  }
}

export default SearchBarItem
