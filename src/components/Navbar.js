import React from 'react'

function Navbar() {
    const logo = (
        <img className='logo' src="https://www.google.com/images/icons/product/keep-512.png" alt='logo' />
    );
  return (
    <div className='header'>
        {logo}<h1 className='logo-txt'>Keep</h1>
    </div>
  )
}

export default Navbar