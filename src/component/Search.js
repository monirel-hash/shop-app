import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Search() {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');

  const searchPays = async (keyword) => {
    const { data } = await axios.get(`http://localhost:5000/products?name_like=${keyword}`);
    return data;
  }

  const handleSearch = async () => {
    const data = await searchPays(searchValue);
    dispatch({
      type: "SET_PRODUCTS",
      payload: data
    })
    
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
