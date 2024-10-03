'use client';

import React from 'react';
import { SearchManufacturer } from './';
import { useState } from 'react';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {};

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
// As soon as you hava an onSubmit that is a browser event we need to transform it into "use client"
// If we use useState, then we should use "use client" as well.
