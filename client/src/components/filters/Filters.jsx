import React from 'react'
import style from './filters.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect} from 'react'
import { allActivities, byActivities, asc, desc, population,} from '../../store/actions'

const Filters = (props) => {

    const dispatch = useDispatch()
    const activities = useSelector((state) => state.activities)

    useEffect(() => {
        dispatch(allActivities())
    }, [dispatch])

    function activityFilter(event) {
      props.changeStart(0)
      props.changeFinish(10)
      event.preventDefault()
      dispatch(byActivities(event.target.value))
    };
    
    function asc_abc(event) {
      props.changeStart(0)
      props.changeFinish(10)
      event.preventDefault()
      event.target.value === "Name: Asc" ?
      dispatch(asc()) : dispatch(desc())
    };

    function orderPopulation(event) {
      props.changeStart(0)
      props.changeFinish(10)
      event.preventDefault()
      dispatch(population(event.target.value))
    };

  return (
    <div className={style.container}>
        <div>
            <select className={style.filters} name="" id="">
              <option disabled={false}> Order by...</option>
              <option onClick={(e) => asc_abc(e)}> Name: Asc </option>
              <option onClick={(e) => asc_abc(e)}> Name: Desc </option>
              <option onClick={(e) => orderPopulation(e)}> Population: high to low </option>
              <option onClick={(e) => orderPopulation(e)}> Population: low to high </option>
            </select>

            <select className={style.filters} name="" id="">
                <option> By Activities...</option>
                  {activities.map((a, index) => {
                  return <option onClick={(e) => activityFilter(e)} key={index}> {a.name} </option>
                 })}
            </select>

        </div>
    </div>
  )
};

export default Filters