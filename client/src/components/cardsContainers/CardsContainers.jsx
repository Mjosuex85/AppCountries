import React from 'react'
import CountryCard from '../countryCard/CountryCard'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { allCountries } from '../../store/actions.js'
import style from './cardsContainers.module.css'
import Loading from '../loading/Loading.jsx'

const CardsContainers = () => {
    const countries = useSelector((state) => state.allCountries)
    const dispatch = useDispatch()

    const [start, setStart] = useState(0)
    const [finish, setFinish] = useState(9)

    useEffect(() => {
        dispatch(allCountries())
    }, [dispatch])

    /* function next(e) {
        e.preventDefault()
    }

    function previous() {
        e.preventDefault()
    } */

  return (
    <div className={style.container} >

        {countries.length === 0 ? <Loading/> : countries.slice(start, finish).map((country, index) => {
            return <CountryCard
                key={index}
                id={country.id}
                name={country.name}
                flags={country.flags}
                continents={country.continents}
                capital={country.capital}
                subregion={country.subregion}
                area={Intl.NumberFormat('de-DE').format(country.area)}
                population={Intl.NumberFormat('de-DE').format(country.population)}
                activities={country.activities}
                season={country.activities.map(s => s.season)}
            />
        })  }
    </div>
  )
}

export default CardsContainers
