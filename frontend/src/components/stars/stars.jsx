import React from 'react';


class Stars extends React.Component {

  roundRating(score) {
    return Math.round(parseInt(score) * 2) / 2;
  }

  displayedStars(score) {

  }


  render() {
    const { rating, cssClass } = this.props;
    return (
      <div className={cssClass}>
        {this.displayedStars(rating)}
      </div>
    );
  }
}

export default Stars;
