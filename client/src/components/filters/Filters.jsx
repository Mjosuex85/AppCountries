import React from 'react'
import style from './filters.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { allActivities, byActivities, asc, desc, population, setPagination, byArea} from '../../store/actions'

const Filters = ({countriesPerPageFunction}) => {
  const continentSelected = useSelector((state) => state.continents)
  const dispatch = useDispatch()
  const activities = useSelector((state) => state.activities)
    
    useEffect(() => {
        dispatch(allActivities())
    }, [dispatch])

    function activityFilter(event) {
      event.preventDefault()
      dispatch(setPagination(1))
      dispatch(byActivities(event.target.value))
    };

    function onHandleChange(e) {
      const value = e.target.value
      switch(value) {
        case "Order by...":
          return
        case 'Name: a - z':
          dispatch(asc())
          break;
        case 'Name: z - a':
          dispatch(desc())
          break;
        case "Area: high to low": 
          dispatch(byArea(value))
          break;
        case "Area: Low to high":
          dispatch(byArea(value))
          break
        case 'Population: high to low':
          dispatch(population(value))
          break;
        case 'Population: low to high':
          dispatch(population(value))
          break;

        default: break
      }
      dispatch(setPagination(1))
      countriesPerPageFunction()
    };

  return (
    <div className={style.container}>
      <h5 style={{padding: '0rem', margin: '0'}}> 
        {continentSelected[0]}
      </h5>
        <div>
            <select onChange={(e) => onHandleChange(e)} className={style.filters} >
              <option disabled={false}> Order by...</option>
              <option> Name: a - z</option>
              <option> Name: z - a </option>
              <option> Population: high to low </option>
              <option> Population: low to high </option>
              <option> Area: high to low </option>
              <option> Area: Low to high </option>
            </select>

            <select onChange={(e) => activityFilter(e)} className={style.filters} >
                <option> By Activities...</option>
                  {activities.map((a, index) => {
                  return <option key={index}> {a.name} </option>
                 })}
            </select>
      </div>
    </div>
  )
};

export default Filters