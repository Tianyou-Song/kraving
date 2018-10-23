import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { fetchDogs } from '../../util/api/dog_util';

class SearchDropdown extends React.Component {


  render() {

    const { formType, side, searchInfo, filteredDogs, filteredTypes } = this.props;

    if (searchInfo.length >= 1) {
      return (
        <div className={`${formType}-search-dropdown-container`}
          id={`${side}-search-bar-dropdown`}>

          {filteredDogs.map(dog => (
            <Link to={`/dog/${dog.id}`} key={dog.id}>
              <div className={`${formType}-search-dropdown-item`}>
                <i className="fas fa-bone"></i>
                <span>{dog.name}</span>
              </div>
            </Link>
          ))}

          {filteredTypes.map(type => (
            <Link to={`/search/${type.id}`} key={type.id}>
              <div className={`${formType}-search-dropdown-item`}>
                <i className="fas fa-bone"></i>
                <span>{type.name}</span>
              </div>
            </Link>
          ))}

        </div>
      );

    } else {

      return (
        <div className={`${formType}-search-dropdown-container`}
          id={`${side}-search-bar-dropdown`}>

          <Link to={`/search/${1}`}>
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Hound</span>
            </div>
          </Link>

          <Link to={`/search/${2}`}>
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Herding</span>
            </div>
          </Link>


          <Link to={`/search/${3}`}>
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Sporting</span>
            </div>
          </Link>

          <Link to={`/search/${4}`}>
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Toy</span>
            </div>
          </Link>

          <Link to={`/search/${5}`}>
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Terrier</span>
            </div>
          </Link>

          <Link to={`/search/${6}`}>
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Working</span>
            </div>
          </Link>


        </div>
      );
    }
  }
}

export default SearchDropdown;
