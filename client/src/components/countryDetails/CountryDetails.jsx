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

    const [show, setShow] = useState(false)

    useEffect(() => {
        dispatch(byId(id))
        setShow(() => setTimeout(true), 2000)
    }, [dispatch])

    function back() {
        window.history.back() 
      }

    {show === false && (<div className={style.loading}>   
                <Loading/>
            </div>)}

  return (
    <>
    
                 <button onClick={(e) => back(e)}> Back </button>
    <div className={style.container2}>
       
        <div className={style.container1}> 
             <h1 className={style.name}>{details.name}</h1>
             <img className={style.image} src={details.flags} alt="Not Found"/>
             <h3> Population: ---- {Intl.NumberFormat('de-DE').format(details.population)}</h3>
             <h3> Area: ---- {Intl.NumberFormat('de-DE').format(details.area)} km2 </h3>
             <h3> Continent: ---- {details.continents}</h3>
             <h3> Capital: ---- {details.capital}</h3>
        </div>
            
        <div className={style.activities}> 
                {details.activities?.map((a, i) => { 
                    return <Activities key={i} name={a.name} 
                    difficulty={a.difficulty} 
                    duration={a.duration}
                    season={a.season} />}
                )}
        </div>
    </div>
    </>
  )
}

export default CountryDetails