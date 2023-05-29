import React from 'react'
import Navigation from '../Navigation'
import './header.css'

const Header = ({ currentPage, handlePageChange }) => {
  return (
  
    <header className='header-container p-3 d-flex flex-column align-items-center'>
      <h1 className='title'>Travis Miller</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>

        
  )
}

export default Header