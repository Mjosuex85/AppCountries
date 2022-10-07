import React from "react";
import style from './countryCard.module.css'
import { Link } from 'react-router-dom'
import autumn from './autumn.png'
import spring from './spring.png'
import summer from './summer.png'
import winter from './winter.png'

const CountryCard = (props) => {

  const activities = [...new Set(props.activities?.map(e => e.season))]
  
  const x = [autumn, spring, summer, winter]
  console.log(activities)

  return (
    <Link to={`/countries/${props.id}`} className={style.containrer}> 


      

      <div>
        <div> 
        
        
        
              <p className={style.ph}> {props.name}  {activities.length > 0 ? activities.map((icon, index) => 
                      
                      { 
                        let img
                        if(icon === 'Autumn' )  img = autumn
                        if(icon === 'Spring' )  img = spring
                        if(icon === 'Summer' )  img = summer
                        if(icon === 'Winter' )  img = winter
                        
                   return <img style={{marginLeft: '5px'}} key={index} src={img} alt="" width="24px" />
                            }) : <p></p>}
                            </p></div>
        
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