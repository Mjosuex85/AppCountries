import React from 'react'
import style from './filters.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect} from 'react'
import { allActivities, byActivities } from '../../store/actions'

const Filters = () => {

    const dispatch = useDispatch()
    const activities = useSelector((state) => state.activities)

    useEffect(() => {
        dispatch(allActivities())
    }, [dispatch])

    function activityFilter(event) {
      event.preventDefault()
      console.log(event.target.value)
      dispatch(byActivities(event.target.value))
    }


  return (
    
    <div className={style.container}>
        <div>
            <select className={style.filters} name="" id="">
              <option disabled={false}> Order by...</option>
              <option> Name: Asc </option>
              <option> Name: Desc </option>
              <option> Population: high to low </option>
              <option> Population: low to low </option>
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
}

export default Filters