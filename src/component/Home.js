import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

function Home() {
  return (
    <>
        <Menu />
        <div className='d-flex gap-3'>
            
          <Outlet />
        </div>
    </>
  )
}

export default Home
