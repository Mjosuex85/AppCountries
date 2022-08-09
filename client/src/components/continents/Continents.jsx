import React from 'react'
import africa from '../../images/africa.png'
import southamerica from '../../images/southamerica.png'
import antarctica from '../../images/antartida.png'
import asia from '../../images/asia.png'
import oceania from '../../images/australia.png'
import europe from '../../images/europe.png'
import style from './continents.module.css'
import { useState } from 'react'
import { byContinente } from '../../store/actions.js'
import { useDispatch } from 'react-redux'

const continents = [africa, southamerica, antarctica, asia, oceania, europe]
const names = ["Africa", "South America", "Antarctica", "Asia", "Oceania", "Europe"]
const width = 140
const height = 110

const Continents = () => {

  const dispatch = useDispatch()  

  function handleClick(e) {
    e.preventDefault()
    console.log(e.target.name)
    dispatch(byContinente(e.target.name))
  }

  return (
    <div className={style.container}>   
        {continents.map((c, index) => {
            return <img key={index} 
                        name={names[index]} 
                        onClick={(e) => handleClick(e)} className={style.image} 
                        src={c} alt="Not Found" 
                    width={width} 
                    height={height} />
        })}
    </div>
  )
};

export default Continents