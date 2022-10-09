import React, { useState } from 'react'
import style from './countryDetails.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect} from 'react'
import { byId, getWheather, earaseActivities, clear } from '../../store/actions.js'
import Activities from '../activities/Activities.jsx'
import Loading from '../loading/Loading'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CountryDetails = ({id}) => {
  const dispatch = useDispatch()
  
  const details = useSelector((state) => state.countryDetails)
  const wheater = useSelector((state) => state.weather)
  const activities = useSelector((state) => state.activitiesDetails)

    const [w, setW] = useState({})


  console.log(details)

    useEffect(() => {
      dispatch(byId(id))
      setW({...wheater[0]})
    }, [dispatch, id])


    useEffect(() => {
        dispatch(getWheather())
    },[])
    
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

    const createActicity = {
      
    }

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
          <button className={style.btn} onClick={(e) => back(e)}> 
            Back 
          </button>

      <div className={style.container1}> 
             <h6 className={style.name}>{details && details.name}</h6>
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
             <h5> Weather in {details && details.capital} <img src={`http://openweathermap.org/img/wn/${wheater[0] && wheater[0].weather[0].icon}@2x.png`} alt="" />{wheater[0] && wheater[0].main.temp} C° </h5> 
             <p>Feels Like {wheater[0] && wheater[0].main.feels_like}</p>
             <hr/>
             <p>max  {wheater[0] && wheater[0].main.temp_max}</p>
             <hr/>
             <p>min  {wheater[0] && wheater[0].main.temp_min}</p>
             <hr/>
             <p>wind  {wheater[0] && wheater[0].wind.speed}</p>
             <hr/>
             <p>humidity  {wheater[0] && wheater[0].main.temp}</p>
          </div>
        </div> 

        
       {details.activities && details.activities.length === 0 
          ? <div className={style.noActivities}> 
                <h3 > There is not activities archived </h3> 
                  <Link to="/createactivity"> 
                    <button className={style.create} >Create Activity</button>
                  </Link> 
            </div>   

          : <div className={style.activities}> 
                {details.activities?.sort((a, b) => a.name > b.name).map((a, i) => { 
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
        }

      </div>
    </div>
  )
}

export default CountryDetails