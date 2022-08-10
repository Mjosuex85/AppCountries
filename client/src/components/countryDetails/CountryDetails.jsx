import React from 'react'
import style from './countryDetails.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { byId } from '../../store/actions.js'
import Activities from '../activities/Activities.jsx'

const CountryDetails = ({id}) => {
    const dispatch = useDispatch()
    const details = useSelector((state) => state.countryDetails)

    useEffect(() => {
        dispatch(byId(id))
    }, [dispatch])

  return (
    
    <div className={style.container}>
        <h1>{details.name}</h1>
        <img src={details.flags} alt="Not Found"/>
        <h3> Population: {details.population}</h3>
        <h3> Area: {details.area}</h3>
        <h3> Continent: {details.continents}</h3>
        <h3> Capital: {details.capital}</h3>
            
            <div> 
                {details.activities?.map((a, i) => { 
                    return <Activities key={i} name={a.name} 
                    difficulty={a.difficulty} 
                    duration={a.duration}
                    season={a.season} />}
                )}
            </div>
    </div>
  )
}

export default CountryDetails