import React from 'react';
// import SearchDropdown from './searchbar_dropdown';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInfo: '',
      location: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className={`search-container`}>

        <div className={`search-input left-bar` } id="left-search-bar">
          <input type="text"
            placeholder="Search for food"
            className="left-input"
            onChange={this.update('searchInfo')}
          />
        </div>

        {/* <SearchDropdown formType={formType} side={'left'} searchInfo={searchInfo}
          filteredDogs={filteredDogs} filteredTypes={filteredTypes}/> */}



        {/* <div className={`search-input right-bar`} id="right-search-bar">
          <span>Near</span>
          <input type="text"
            placeholder="San Francisco, CA"
            className="right-input"
            onChange={this.update('location')}
          />
        </div> */}

        <div className={`search-button`}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
