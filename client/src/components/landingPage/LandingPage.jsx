import React from 'react'
import style from './landingPage.module.css'
import image from './Coun.png'
import worldMap from './worldMap.svg'
import worldApp from './worldAPp.png'
import { Link } from 'react-router-dom'
import back from './667235.jpg'
import video from './video.mp4'
import { useEffect } from 'react'
import { useState } from 'react'

const LandingPage = () => {

    /* const [move, setMove] = useState(true)
    const [styleB, setStyleB] = useState({backgroundColor: 'red'})

    useEffect(() => {
        setInterval(() => {
            if(move) {
                setStyleB({backgroundColor: 'yellow'})
                setMove(false)
            }
            else {
                setStyleB({backgroundColor: 'red'})
                setMove(true)
            }
        }, 2000);
    }) */

  return (

    <header>
        <div className={style.imgBack}>
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
         </div>
            
            <video width='100%'  onLoadedMetadata="this.muted=true" autoPlay loop>
                <source src={video}/>
            </video>
       
    </header>


    
  )
}

export default LandingPage