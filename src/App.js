import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProducts from './component/AddProduct';
import Home from './component/Home';
import Products from './component/Products';
import Search from './component/Search';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/products");
      dispatch({
        type: "SET_PRODUCTS",
        payload: response.data
      })
    }
    fetchData();
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >

        <Route index element={<Products />}/>
            <Route path="search" element={<Search />} />
            <Route path='AddProducts' element={<AddProducts />} />

        </Route>
            //test
      </Routes>
    </BrowserRouter>
  );
}

export default App;
