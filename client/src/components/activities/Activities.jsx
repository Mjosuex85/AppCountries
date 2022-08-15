import React from 'react'
import style from './activities.module.css'

const Activities = (props) => {
  return (
    <div className={style.container}>
        <h3 className={style.h1}>{props.name}</h3>
        <p> Difficulty: {props.difficulty}</p>
        <p> Duration: {props.duration}</p>
        <p>Seasons: {props.season}</p>

    </div>
  )
}

export default Activities