import React from 'react'
import style from './landingPage.module.css'
import image from './7yto_46o5_210629.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className={style.container}>
        <Link to='/home'> 
            <img 
                className={style.image}
                src={image} 
                alt="" width="300" height="300" 
            /> 
        </Link> 
    </div>
  )
}

export default LandingPage