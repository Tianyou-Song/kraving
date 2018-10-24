import React from 'react';

class SearchBarItem extends React.Component {

  render() {
    const { bus } = this.props;

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
  }
}

export default SearchBarItem
