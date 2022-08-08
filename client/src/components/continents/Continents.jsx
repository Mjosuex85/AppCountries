import React from 'react'
import africa from '../../images/africa.png'
import southamerica from '../../images/southamerica.png'
import antartida from '../../images/antartida.png'
import asia from '../../images/asia.png'
import australia from '../../images/australia.png'
import europe from '../../images/europe.png'
import style from './continents.module.css'

const continents = [africa, southamerica, antartida, asia, australia, europe]
const width = 140
const height = 110

const Continents = () => {
  return (
    <div className={style.container}>   
        {continents.map((c, index) => {
            return <img key={index} className={style.image} 
                    src={c} alt="Not Found" 
                    width={width} 
                    height={height} />
        })}
    </div>
  )
};

export default Continents