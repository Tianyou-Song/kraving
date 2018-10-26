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
      googleResponse: [],
      showFoodDropdown: true,
      showlocationDropdown: true
    };

    this.yelpSearch = this.yelpSearch.bind(this);
    this.googleSearch = this.googleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
      if (field === 'location') {
        this.setState({showlocationDropdown: true})
      } else if (field === 'searchInfo') {
        this.setState({showFoodDropdown: true})
      }
    }
  }

  componentDidUpdate() {
    const { searchInfo, yelpResponse, lastSearchInfo,
      lastLocation, googleResponse, location } = this.state;

    if (searchInfo.length >= 1 && lastSearchInfo !== searchInfo) {
      this.setState({lastSearchInfo: searchInfo});
      if (location === '' ) {
        this.yelpSearch({term: searchInfo, location: 'San Francisco, CA', limit: 5})
      } else {
        this.yelpSearch({term: searchInfo, location: location, limit: 5})
      }
    } else if (searchInfo.length === 0 && yelpResponse.length >= 1) {
      this.setState({yelpResponse: []})
    }

    if (location.length >=1 && lastLocation != location) {
      this.setState({lastLocation: location});
      this.googleSearch(location)
      // const dropdown = document.getElementById('search-dropdown-loc')
      // dropdown.classList.remove('display-none')
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

  handleClick(type, value) {
    if (type === 'location') {
      this.setState({location: value})
      this.setState({showlocationDropdown: false})
    } else if (type === 'food') {
      this.setState({showFoodDropdown: false})
    }
    // const dropdown = document.getElementById('search-dropdown-loc')
    // dropdown.classList.add('display-none')
  }

  showClosingButton(type) {
    const { location, searchInfo } = this.state;
    if (type === 'loc' && location.length >= 1) {
      return <i className="fas fa-times" onClick={() => this.setState({location: ''})}></i>
    } else if (type === 'search' && searchInfo.length >= 1) {
      return <i className="fas fa-times" onClick={() => this.setState({searchInfo: ''})}></i>
    }
  }

  render() {
    const { yelpResponse, googleResponse, handleClick, location,
      searchInfo, showlocationDropdown, showFoodDropdown } = this.state;

    return (
    <div className="search-container">

      <div className={`search-bar-container`}>

        <i className="fas fa-search"></i>
        <div className="search-input">
          <div className="search-input-inner">
            <input type="text"
              placeholder="Pizza, sushi, donuts"
              className="search-input-box"
              onChange={this.update('searchInfo')}
              value={searchInfo}
            />
          </div>
          {this.showClosingButton('search')}
        </div>


        <div className="searchbar-dropdown" id="search-dropdown-food">
          {yelpResponse.map(bus => (
            <SearchBarItem bus={bus} key={bus.id} formType='yelp'
            show={showFoodDropdown} handleClick={this.handleClick}/>
          ))}
        </div>
      </div>

      <div className={`search-bar-container-location`}>

        <i className="fas fa-map-marker-alt"></i>
        <div className="search-input">
          <div className="search-input-inner">
            <input type="text"
              placeholder="San Francisco, CA"
              className="search-input-box"
              onChange={this.update('location')}
              value={location}
            />
          </div>
          {this.showClosingButton('loc')}
        </div>


        <div className="searchbar-dropdown" id="search-dropdown-loc">
          {googleResponse.map(loc => (
            <SearchBarItem loc={loc} key={loc.id} formType='google'
              handleClick={this.handleClick} show={showlocationDropdown}/>
          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
