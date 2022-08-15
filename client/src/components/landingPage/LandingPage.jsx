import React from 'react'
import style from './landingPage.module.css'
import image from './Coun.png'
import worldMap from './worldMap.svg'
import worldApp from './worldAPp.png'
import { Link } from 'react-router-dom'
import back from './667235.jpg'

const LandingPage = () => {
  return (
    <div className={style.container}>
        <Link to='/countries' className={style.box}> 

            <img 
                className={style.image}
                src={image} 
                alt="" width="300" height="300" 
            /> 
            {/* <h1 className={style.huno}>By Flags</h1> */}
        </Link> 

        <Link to='/worldmap' className={style.box}> 
            <img 
                className={style.image}
                src={worldApp} 
                alt="" width="300" height="300" 
            /> 
           {/*  <h1 className={style.huno}>World Map</h1> */}
        </Link> 
    </div>
  )
}

export default LandingPage