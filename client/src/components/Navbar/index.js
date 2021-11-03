import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/logo.svg'
import noble from '../../assets/noble.png'



const NavBar = () => {
  return (
    <div className= "header">
        <Link to='/' className='logo-container'>
          <Logo className='logo' />
        </Link>
        <img src={noble} height="125px" width="850px" alt="Logo" />
       
        <div className="options">
        <Link to='nobleliving.fun' className='option'>
           NobleLiving
          </Link>
       
        
      
      </div>
     
    </div>
  )
}



export default NavBar;