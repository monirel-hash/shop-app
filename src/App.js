import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProducts from './component/AddProduct';
import Home from './component/Home';
import Products from './component/Products';
import Search from './component/Search';

function App() {
  
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
