import React from 'react'
import africa from '../../images/africa.png'
import southamerica from '../../images/southamerica.png'
import antarctica from '../../images/antartida.png'
import asia from '../../images/asia.png'
import oceania from '../../images/australia.png'
import europe from '../../images/europe.png'
import northamerica from '../../images/northamerica.png'
import style from './continents.module.css'
import { byContinente, setPagination, continentSelected} from '../../store/actions.js'
import { useDispatch } from 'react-redux'
import World from '../../images/worldMap.png'
import { useEffect, useState } from 'react'

export const continents = [World, northamerica, africa, southamerica, antarctica, asia, oceania, europe]
export const names = ["World","North America", "Africa", "South America", "Antarctica", "Asia", "Oceania", "Europe"]
const width = 100
const height = 90

let style1 = style.image
let style2 = style.selectedImg


const Continents = ({countriesPerPageFunction}) => {
  const dispatch = useDispatch()  
  const [continente, setContinente] = useState("")

  useEffect(() => {
    dispatch(continentSelected(continente))
  },[continente])

  function handleClick(e) {
    e.preventDefault()
    dispatch(setPagination(1))
    dispatch(byContinente(e.target.name))
    setContinente(e.target.name)
    countriesPerPageFunction()
  };

  return (
    <div className={style.container}>  
        {continents.map((c, index) => {
            return <img key={index} 
                        className={style1} 
                        name={names[index]} 
                        onClick={(e) => handleClick(e)} 
                        src={c} alt="" 
                    width={width} 
                    height={height} />
        })}
    </div>
    
  )
};

export default Continents