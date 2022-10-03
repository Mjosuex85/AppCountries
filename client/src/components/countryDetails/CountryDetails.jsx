import React, { useState } from 'react'
import style from './countryDetails.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect} from 'react'
import { byId, getWheather, filterActivities } from '../../store/actions.js'
import Activities from '../activities/Activities.jsx'
import Loading from '../loading/Loading'
import axios from 'axios'

const CountryDetails = ({id}) => {
    const dispatch = useDispatch()
    const details = useSelector((state) => state.countryDetails)
    const wheater = useSelector((state) => state.weather)
    const activities = useSelector((state) => state.countryDetails.activities)
    
    const [acti, setActivitie] = useState([])
    console.log("la acti", acti)
    
    useEffect(() => {
      dispatch(byId(id))
      dispatch(getWheather(id))
      setActivitie(activities)
    }, [dispatch, id])
    

    const removeFunction = (id) => {
      console.log(id)
      const x = activities.filter(e => e.id != id)
      console.log(x)
    }

    /* console.log("dddd",wheater[0]) */

    /* useEffect(() => {
      setTimeout(() => {
        setWeatherC(wheater)
      }, 1000);
    },[]) */

    function back() {
        window.history.back() 
      }
/* 
      {show && <div className={style.loading}>   
                  <Loading/>
              </div>} */
  return (
    <div>
      <div className={style.container2}>
                 <button className={style.btn} onClick={(e) => back(e)}> Back </button>
       
        <div className={style.container1}> 
             <h1 className={style.name}>{details.name}</h1>
             <img className={style.image} src={details.flags} alt="Not Found"/>

             <div className={style.info_container}>
             
             <div className={style.info1}>
                <h6> Population: </h6>
                <h6> Area: </h6>
                <h6> Continent: </h6>
                <h6> Capital: </h6>
                <h6> Subregion: </h6>
             </div>

            <div className={style.info2}>
              <h6> {Intl.NumberFormat('de-DE').format(details.population)}</h6>
              <h6> {Intl.NumberFormat('de-DE').format(details.area)} km2 </h6>
              <h6> {details.continents}</h6>
              <h6> {details.capital}</h6>
              <h6> {details.subregion}</h6>
            </div>
            </div>
        </div>

        {/* <div className={style.container1}> 
             <h3> Wheater in {details.capital}</h3>
              <p>{{wheater && wheater[0].base}}</p>
        </div> */}
        
        <div className={style.activities}> 
            
                {activities?.map((a, i) => { 
                    return <Activities key={i} 
                    remove={removeFunction}
                    country_id={details}
                    activity_id={a.id}
                    name={a.name} 
                    difficulty={a.difficulty} 
                    duration={a.duration}
                    season={a.season} />}
                )}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails