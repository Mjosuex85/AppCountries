import React from 'react'
import style from './activities.module.css'
import axios from 'axios'
import cancelImage from '../../images/cancel.png'
import { useSelector } from 'react-redux'


const Activities = (props) => {

  const click = async (e) => {  // función para borrar la actividad solo a ese país
    e.preventDefault()
    try {
        props.remove(props.activity_id)
        alert(props.activity_id)
    }
    
    catch(error) {
        console.log(error)
    }
};

  return (
    <div onClick={(e) => click(e)} className={style.container}>
        <h5 className={style.h1}>{props.name} {<img className={style.cancel} src={cancelImage} width='25' alt="" />}</h5>
        <h6> Difficulty: {props.difficulty}</h6>
        <h6> Duration: {props.duration} Days</h6>
        <h6>Season: {props.season}</h6>
    </div>
  )
}

export default Activities