import React from "react";
import style from './countryCard.module.css'

const CountryCard = (props) => {
  return (
    <div className={style.containrer}>
        <h5>{props.name}</h5>
        <img className={style.image} src={props.flags} alt="" width="100" height="60"/>
        <p>{props.continents}</p>
    </div>
  )
};

export default CountryCard