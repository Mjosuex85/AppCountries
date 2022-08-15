import React from "react";
import style from './countryCard.module.css'
import { Link } from 'react-router-dom'

const CountryCard = (props) => {
  return (
    <Link to={`/countries/${props.id}`} className={style.containrer}> 
      <div /* className={style.containrer} */>
        <h5 className={style.ph}>{props.name}</h5>
        <img className={style.image} src={props.flags} alt="" width="120" height="70"/>
        <p >{props.continents}</p>
      </div>
    </Link>
  )
};

export default CountryCard