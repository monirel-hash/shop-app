import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const searchPays = async (keyword) => {
    const { data } = await axios.get(`http://localhost:5000/products?name_like=${keyword}`);
    return data;
  }

  const handleSearch = async () => {
    const data = await searchPays(searchValue);
    console.log(data); // Or do something with the data
    
  }

  return (
    <div>
      <input type="text" placeholder="Search.." name="search" 
      value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      <Button type="submit" onClick={handleSearch}>
        <i className="fa fa-search"></i>
      </Button>
    </div>
  )
}

export default Search;
