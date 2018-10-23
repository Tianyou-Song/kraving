import React from 'react';
import axios from 'axios';
// import SearchDropdown from './searchbar_dropdown';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInfo: '',
      lastSearchInfo: '',
      location: '',
      yelpResponse: []
    };

    this.yelpSearch = this.yelpSearch.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidUpdate() {
    const { searchInfo, yelpResponse, lastSearchInfo } = this.state;
    if (searchInfo.length >= 1 && lastSearchInfo != searchInfo) {
      this.setState({lastSearchInfo: searchInfo});
      this.yelpSearch({term: searchInfo, location: 'San Francisco, CA', limit: 5})
    } else if (searchInfo.length === 0 && yelpResponse.length >= 1) {
      this.setState({yelpResponse: []})
    }
  }

  yelpSearch(searchInfo) {
    const { yelpResponse } = this.state;
    axios
      .get('/api/yelp/search', {
      params: {
        searchInfo
      }})
      .then(res => {
        const businesses = res.data
        this.setState({yelpResponse: businesses})
        debugger;
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { yelpResponse } = this.state;

    return (
      <div className={`search-container`}>

        <div className={`search-input left-bar` } id="left-search-bar">
          <input type="text"
            placeholder="Search for food"
            className="left-input"
            onChange={this.update('searchInfo')}
          />
        </div>

        <div>
          {yelpResponse.map(bus => (
            <li key={bus.id}>{bus.name}</li>
          ))}
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
