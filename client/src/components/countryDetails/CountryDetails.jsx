import React, { useState } from 'react'
import style from './countryDetails.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect} from 'react'
import { byId, getWheather, earaseActivities, clear } from '../../store/actions.js'
import Activities from '../activities/Activities.jsx'
import Loading from '../loading/Loading'
import axios from 'axios'

const CountryDetails = ({id}) => {
  const dispatch = useDispatch()
  
  const details = useSelector((state) => state.countryDetails)
  const wheater = useSelector((state) => state.weather)
  const activities = useSelector((state) => state.activitiesDetails)

    useEffect(() => {
      dispatch(byId(id))
    }, [dispatch, id])


   /*  useEffect(() => {
        console.log("Name ",name)
        dispatch(getWheather(name))
    },[]) */
    
    const removeFunction = (objeto) => {
      var option = window.confirm("Are you sure to delete this activity?")
      if(option) {
        earaseActivities(objeto)
        setTimeout(() => {
          window.location.reload()
          }, 500);
      }
      else {
        return 
      }
    };

    /* useEffect(() => {
      setTimeout(() => {
        setWeatherC(wheater)
      }, 1000);
    },[]) */

    function back() {
        dispatch(clear())
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
             <h6 className={style.name}>{details &&details.name}</h6>
             <img className={style.image} src={details && details.flags} alt="Not Found"/>


             <div className={style.info_container}>
             
             <div className={style.info1}>
                <h6> Population: </h6>
                <hr style={{ width: '14rem' }}/>
                <h6> Area: </h6>
                <hr />
                <h6> Continent: </h6>
                <hr />
                <h6> Capital: </h6>
                <hr />
                <h6> Subregion: </h6>
                <hr />
             </div>

            <div className={style.info2}>
              <h6> {Intl.NumberFormat('de-DE').format(details && details.population)}</h6>
              <hr style={{ width: '14rem' }}/>
              <h6> {Intl.NumberFormat('de-DE').format(details && details.area)} km2 </h6>
              <hr/>
              <h6> {details && details.continents}</h6>
              <hr/>
              <h6> {details && details.capital}</h6>
              <hr/>
              <h6> {details && details.subregion}</h6>
              <hr/>
            </div>
            </div>
       
        <div className={style.container3}> 
             <h3> Wheater in {details && details.capital}</h3>
             <p>Temp</p>
             <p>Temp</p>
             <p>Temp</p>
             <p>Temp</p>
             <p>Temp</p>
              
        </div>
        </div>

        
        <div className={style.activities}> 
            
                {details && details.activities?.sort((a, b) => a.name > b.name).map((a, i) => { 
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