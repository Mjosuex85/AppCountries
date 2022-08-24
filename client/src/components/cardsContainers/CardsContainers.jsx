import React from 'react'
import CountryCard from '../countryCard/CountryCard'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { allCountries, setPagination} from '../../store/actions.js'
import style from './cardsContainers.module.css'
import Loading from '../loading/Loading.jsx'
import Filters from '../filters/Filters'
import Paginate from '../paginate/Paginate'
import Continents from '../continents/Continents'

const CardsContainers = () => {
    const countries = useSelector((state) => state.allCountries)
    const currentPage = useSelector((state) => state.paginate)
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [x, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(16)
    const indexOfLastCharacter = currentPage * countriesPerPage // 9
    const indexOFfirstCharacter = indexOfLastCharacter - countriesPerPage
    const currentCountries = countries.slice(indexOFfirstCharacter, indexOfLastCharacter)
   
    const paginateF = (payload) => {
        dispatch(setPagination(payload))
    }


    useEffect(() => {
        dispatch(allCountries())
        setTimeout(() => setShow(true), 3000)
    }, [dispatch, setTimeout])

    if (countries === "NO SE ENCUENTRA EL PAIS") {

        return (
            <div>

               {/*  <div>
                <Filters  />
                </div> */}

                <div className={style.notFound} >
                    <h1>sorry... we couldn't find the country</h1>
                </div>

                {show === true && (<div className={style.loading}>   
                 <Loading/>
                </div>)}
            </div>
          )
    }
    else {

  return (
    <div>
        <div>
            <Continents />
            <Filters setFirstPage={paginateF}/>
        </div>

        <div>
            <Paginate
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginateF={paginateF}/>
        </div>

        <div className={style.container} >
        
             {show === false && (<div className={style.loading}>   
                 <Loading/>
              </div>)}
               <div>
        </div>
            

             {show === true && currentCountries && currentCountries.map((country, index) => {
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
                 fifa={country.fifa}

                />
            }) } 
        </div>
    </div>
    )
        }
}

export default CardsContainers