import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='nav p-2 d-flex justify-content-around align-items-center' style={{ backgroundColor: '#f9acac' }}>
      <Link className='nav-link' to={'/'}>About </Link>
      <Link className='nav-link' to={'/ticket'}>Ticket Entry</Link>
    </div>
  )
}

export default Navbar