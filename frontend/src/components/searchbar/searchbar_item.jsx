import React from 'react';

class SearchBarItem extends React.Component {

  render() {
    const { bus } = this.props;
    debugger;

    return (
      <div className="search-dropdown-item">
        <img src="/images/stars/0.png"></img>
        <li>{bus.name}</li>
      </div>
    )
  }
}

export default SearchBarItem
