import React from 'react'
import style from './activities.module.css'
import axios from 'axios'
import cancelImage from '../../images/cancel.png'
import { useDispatch, useSelector } from 'react-redux'


const Activities = (props) => {

  const click = async (e) => {  // función para borrar la actividad solo a ese país
    e.preventDefault()
    props.remove({id: props.activity_id, country: props.country_id.id })
};

  return (
    <div  className={style.container}>

        <div className={style.tittle}>
          <h5 style={{marginLeft: '0.5rem'}}>{props.name} </h5>
          <img className={style.cancel} onClick={(e) => click(e)} style={{marginRight: '0.5rem'}} src={cancelImage} width='25' alt="" />
        </div>
        <h6> Difficulty: {props.difficulty}</h6>
        <hr />
        <h6> Duration: {props.duration} Days</h6>
        <hr />
        <h6>Season: {props.season}</h6>
        <hr />
    </div>
  )
}

export default Activities