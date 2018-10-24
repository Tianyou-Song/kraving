import React from 'react';

class SearchBarItem extends React.Component {

  render() {
    const { bus } = this.props;
    debugger;

    return (
      <div className="search-dropdown-item">
        <img src={`/images/stars/${bus.rating}.png`}></img>
        <li>{bus.name}</li>
      </div>
    )
  }
}

export default SearchBarItem
