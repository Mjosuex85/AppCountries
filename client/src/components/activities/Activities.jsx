import React from 'react'
import style from './activities.module.css'
import axios from 'axios'
import cancelImage from '../../images/cancel.png'
import { useDispatch, useSelector } from 'react-redux'
import autumn from './autumn.png'
import spring from './spring.png'
import winter from './winter.png'
import summer from './summer.png'
import minimun from './minimun.png'
import medium from './medium.png'
import high from './high.png'
import { bySeason, byDifficulty } from '../../store/actions'


const Activities = (props) => {

    const dispatch = useDispatch()
    let season;
    let difficulty;

    switch (props.season) {
      case "Winter":
        season = winter
        break;
      case "Spring":
        season = spring
        break;
      case "Autumn":
        season = autumn
        break;
      case "Summer":
        season = summer
    
      default:
        break;
    }

    switch(props.difficulty) {
      case 1:
        difficulty = minimun
      break;
      case 2:
        difficulty = minimun
      break;
      case 3:
        difficulty = medium
      break;
      case 4:
        difficulty = medium
      break;
      case 5:
        difficulty = high
      break;
      
      default:
        break;
    }


  const goActivity = (e) => {
    e.preventDefault()
    const title = e.target.title
    if (title === "Winter" || title === "Autumn" || title === 'Spring' || title === 'Summer' ) {
      bySeason(title)
      window.history.back() 
    }

    else {
      
      byDifficulty(title)
      window.history.back() 
    }
    return
  };



  const onHandleclick = async (e) => {  // función para borrar la actividad solo a ese país
    e.preventDefault()
    props.remove({id: props.activity_id, country: props.country_id.id })
};

  return (
    <div  className={style.container}>
        <div className={style.tittle}>
          <h5 style={{marginLeft: '0.5rem'}}>{props.name} </h5>
          <img className={style.cancel} onClick={(e) => onHandleclick(e)} style={{marginRight: '0.5rem'}} src={cancelImage} width='25' alt="" />
        </div>
          <h6> Duration: {props.duration} Days</h6>
          <hr />
          <div onClick={(e) => goActivity(e)} className={style.icon}  > <h6> Difficulty: {props.difficulty}</h6> <img title={props.difficulty} src={difficulty} alt="" width="30px" /> </div>
          <hr />
        <div onClick={(e) => goActivity(e)} className={style.icon}><h6>Season: {props.season}</h6><img src={season} title={props.season}  alt="" width="30px"/></div>
    </div>
  )
};

export default Activities