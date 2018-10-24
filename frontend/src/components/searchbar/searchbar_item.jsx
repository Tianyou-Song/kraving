import React from 'react';

class SearchBarItem extends React.Component {

  render() {
    const { bus } = this.props;
    debugger;

    return (
      <div className="search-dropdown-item">
        <li>{bus.name}</li>
      </div>
    )
  }
}

export default SearchBarItem
