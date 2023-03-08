import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Cart from './Cart'

const Menu = () => {
  return (
    <div>
      <ul className='menu'>
      <Link to="/">Home</Link>
        <Link to="/AddProducts">Add</Link>
        <Search />
        <Cart style={{float:'left'}}/>
      </ul>
    </div>
  )
}

export default Menu