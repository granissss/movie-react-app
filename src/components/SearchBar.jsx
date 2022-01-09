import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Searchbar = ({ onSearch, searchValue, setSearchValue }) => {

    return (
        <div id="search__bar--form">
          <input
            type="text"
            className="search__bar"
            value={searchValue || ''}
            onChange={(event) => setSearchValue(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' && onSearch()}
            placeholder="Search by name..."
          />
          <button className="search__btn blue" onClick={() => onSearch()}>
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
    );
}

export default Searchbar;
