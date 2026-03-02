import React from 'react'

import profile from './assets/profile.png'
import notificationicon from './assets/notificationicon.png'
const Header = () => {
  return (
    <header className='header_full_container'>

      <div className='header_logo_container'>
        <p>Kirana</p>
      </div>

      <div className='header_nav_container'>
        <img className='notification_icon' src={notificationicon} alt="notification icon" />

        <div className='header_profile_container'>
           <img className='profile_picture' src={profile} alt="profile img" />

        </div>
      
       
      </div>

    </header>
  )
}

export default Header
