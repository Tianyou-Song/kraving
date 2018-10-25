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
      lastLocation: '',
      location: '',
      yelpResponse: [],
      googleResponse: []
    };

    this.yelpSearch = this.yelpSearch.bind(this);
    this.googleSearch = this.googleSearch.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidUpdate() {
    const { searchInfo, yelpResponse, lastSearchInfo, location, lastLocation, googleResponse } = this.state;

    if (searchInfo.length >= 1 && lastSearchInfo != searchInfo) {
      this.setState({lastSearchInfo: searchInfo});
      this.yelpSearch({term: searchInfo, location: 'San Franciso', limit: 5})
    } else if (searchInfo.length === 0 && yelpResponse.length >= 1) {
      this.setState({yelpResponse: []})
    }

    if (location.length >=1 && lastLocation != location) {
      this.setState({lastLocation: location});
      this.googleSearch(location)
    } else if (location.length === 0 && googleResponse.length >= 1) {
      this.setState({googleResponse: []})
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

  googleSearch(location) {
    debugger;
    const { googleResponse } = this.state;
    axios
    .get('api/google/search', {
      params: {
        location
      }})
      .then(res => {
        const predictions = res.data
        this.setState({googleResponse: predictions})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { yelpResponse, googleResponse } = this.state;

    return (
    <div className="search-container">
      <div className={`search-bar-container`}>
        <i className="fas fa-search"></i>
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
            <SearchBarItem bus={bus} key={bus.id} formType='yelp'/>
          ))}
        </div>
      </div>

      <div className={`search-bar-container`}>

        <i className="fas fa-map-marker-alt"></i>
        <div className="search-input">
          <div>
            <input type="text"
              placeholder="San Franciso, CA"
              className="search-input-box"
              onChange={this.update('location')}
            />
          </div>
        </div>


        <div className="searchbar-dropdown" id="search-dropdown-loc">
          {googleResponse.map(loc => (
            <SearchBarItem loc={loc} key={loc.id} formType='google'/>
          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
