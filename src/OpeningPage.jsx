import React from 'react'

import image from './assets/react.svg'

const OpeningPage = () => {
  return (
    <div className='openingPage_full_container'>
      <img src={image} alt="React Logo" />
      <button>
        LogIn
      </button>
    </div>
  )
}

export default OpeningPage
