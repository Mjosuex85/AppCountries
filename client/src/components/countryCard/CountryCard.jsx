import React from "react";
import style from './countryCard.module.css'
import { Link } from 'react-router-dom'

const CountryCard = (props) => {
  return (
    <Link to={`/countries/${props.id}`} className={style.containrer}> 
      <div>
        <p className={style.ph}>{props.name}</p>
        <img className={style.image} 
              src={props.flags} 
              alt="Not Found" 
              width="120" 
              height="70"/>
        <p >{props.continents}</p>
        <p>Population: {props.population}</p>
        <p>Area: {props.area} km2</p>
      </div>
    </Link>
  )
};

export default CountryCard