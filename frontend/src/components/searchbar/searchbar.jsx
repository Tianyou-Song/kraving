import React from 'react';
import axios from 'axios';
import SearchBarItem from './searchbar_item';
import SearchCSS from './searchbar.css'
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
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { yelpResponse } = this.state;

    return (
    <div className="search-container">
      <div className={`search-bar-container`}>
        <i class="fas fa-search"></i>
        <div className="search-input">
          <div>
            <input type="text"
              placeholder="Pizza, sushi, donuts"
              className="search-input-box"
              onChange={this.update('searchInfo')}
            />
          </div>
        </div>


        <div className="searchbar-dropdown" id="search-dropdown-food">
          {yelpResponse.map(bus => (
            <SearchBarItem bus={bus} key={bus.id}/>
          ))}
        </div>
      </div>

      <div className={`search-bar-container`}>

        <i class="fas fa-map-marker-alt"></i>
        <div className="search-input">
          <div>
            <input type="text"
              placeholder="San Franciso, CA"
              className="search-input-box"
              onChange={this.update('searchInfo')}
            />
          </div>
        </div>


        {/* <div className="searchbar-dropdown" id="search-dropdown-loc">
          {yelpResponse.map(bus => (
            <SearchBarItem bus={bus} key={bus.id}/>
          ))}
        </div> */}
        </div>
      </div>
    );
  }
}

export default SearchBar;
