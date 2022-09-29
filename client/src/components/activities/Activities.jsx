import React from 'react'
import style from './activities.module.css'
import axios from 'axios'
import cancelImage from '../../images/cancel.png'


const Activities = (props) => {

  const click = async (e) => {  // función para borrar la actividad solo a ese país
    e.preventDefault()
    try {


      alert("Este es el id de la actividad")
      console.log(props.country_id)
     /*  let message = confirm("are you sure?");

        message === true ? alert("Borrado") : null
      return message */
        /* let delete_activity = await axios.delete("http://localhost:3005/countries/:id", activity)
        
        
        window.location.reload(); */
    }
    
    catch(error) {
        console.log(error)
    }
};


  return (
    <div onClick={(e) => click(e)} className={style.container}>
        <h5 className={style.h1}>{props.name} {/* <img className={style.cancel} src={cancelImage} width='25' alt="" /> */}</h5>
        <h6> Difficulty: {props.difficulty}</h6>
        <h6> Duration: {props.duration} Days</h6>
        <h6>Season: {props.season}</h6>
    </div>
  )
}

export default Activities