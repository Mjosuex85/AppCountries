import React from 'react'
import africa from '../../images/africa.png'
import southamerica from '../../images/southamerica.png'
import antarctica from '../../images/antartida.png'
import asia from '../../images/asia.png'
import oceania from '../../images/australia.png'
import europe from '../../images/europe.png'
import northamerica from '../../images/northamerica.png'
import style from './continents.module.css'
import { byContinente, setPagination} from '../../store/actions.js'
import { useDispatch } from 'react-redux'
import World from '../../images/worldMap.png'

export const continents = [World, northamerica, africa, southamerica, antarctica, asia, oceania, europe]
export const names = [ "World","North America", "Africa", "South America", "Antarctica", "Asia", "Oceania", "Europe"]
const width = 100
const height = 90

const Continents = () => {
  const dispatch = useDispatch()  
  
  function handleClick(e) {
    e.preventDefault()
    dispatch(setPagination(1))
    console.log(e.target.name)
    dispatch(byContinente(e.target.name))
  }

  return (
    <div className={style.container}>  
        {/* <div>
          <AllCountriesMap/>
        </div> */}
        {continents.map((c, index) => {
            return <img key={index} 
                        className={style.image} 
                        name={names[index]} 
                        onClick={(e) => handleClick(e)} 
                        src={c} alt="Not Found" 
                    width={width} 
                    height={height} />
        })}
    </div>
    
  )
};

export default Continents