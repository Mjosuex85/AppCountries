import React from 'react'
import style from './activities.module.css'

const Activities = (props) => {
  return (
    <div className={style.container}>
        <h3>{props.name}</h3>
        <p> Difficulty: {props.difficulty}</p>
        <p> Duration: {props.duration}</p>
         Seasons: <ul>{props.season.map((s,i) => {
            return <li key={i}> {s}</li>
        })}</ul>

    </div>
  )
}

export default Activities