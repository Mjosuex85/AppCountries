import React, { useState } from 'react'
import style from './countryDetails.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { byId } from '../../store/actions.js'
import Activities from '../activities/Activities.jsx'
import Loading from '../loading/Loading'

const CountryDetails = ({id}) => {
    const dispatch = useDispatch()
    const details = useSelector((state) => state.countryDetails)

/*     const [show, setShow] = useState(true) */

    useEffect(() => {
        dispatch(byId(id))
/*         setShow(() => setTimeout(false), 1500) */
    }, [dispatch, id])

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
        
        <div className={style.activities}> 
            
                {details.activities?.map((a, i) => { 
                    return <Activities key={i} 
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