import React from 'react'
import {Link} from 'react-router-dom';
import "../assets/styles/components/_header.scss"

function Navbar() {
  return (
    <>
    <header className='c-header'>
      <Link to ="/" className>
        <figure className='c-header__logo-container'>
          <img className='c-header__logo' alt='En terapia logo' src='./img/logo.png'></img>
        </figure>
      </Link>
    </header>
    </>
  )
}

export default Navbar