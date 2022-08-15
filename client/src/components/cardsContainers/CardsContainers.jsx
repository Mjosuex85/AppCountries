import React from 'react'
import CountryCard from '../countryCard/CountryCard'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { allCountries } from '../../store/actions.js'
import style from './cardsContainers.module.css'
import Loading from '../loading/Loading.jsx'
import Filters from '../filters/Filters'
import Paginate from '../paginate/Paginate'
import Continents from '../continents/Continents'

const CardsContainers = () => {
    const countries = useSelector((state) => state.allCountries)
    const paginate = useSelector((state) => state.paginate)
    const dispatch = useDispatch()

    const [start, setStart] = useState(0)
    const [finish, setFinish] = useState(10)
    const [currentPage, setCurrentPage] = useState([])
    const all_countriess = countries.slice(start, finish)

    console.log(paginate)

    useEffect(() => {
        dispatch(allCountries())
    }, [dispatch])

    function next(e) {
        e.preventDefault()
        setStart(start + 10)
        setFinish(finish + 10)
    }

    function previous(e) {
        e.preventDefault()
        setStart(start -10)
        setFinish(finish -10)
    }

    if (countries === "NO SE ENCUENTRA EL PAIS") {

        return (
            <div>
                <div>
                <Filters/>
                </div>
                <div className={style.notFound} >
                    <h1> sorry... we couldn't find the country </h1>
                </div>
            </div>
          )
    }
    else {

  return (
    <div>
        <div>
        <Continents/>
        <Filters changeStart={(e) => setStart(e)} changeFinish={(e) => setFinish(e)}/>
            <Paginate next={(e) =>next(e) } 
                      previous={(e => previous(e))} 
                      start={start} 
                      finish={finish} 
                      countries={countries} />
        
        </div>
    <div className={style.container} >
        {
            countries.length === 0 ? 
            <div className={style.loading}>   
                <Loading/>
            </div>
            :
            all_countriess && all_countriess.map((country, index) => {
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

        <div>
        </div>
    </div>
    </div>
  )
}
}

export default CardsContainers
