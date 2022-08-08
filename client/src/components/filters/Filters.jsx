import React from 'react'
import style from './filters.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect} from 'react'
import { allActivities } from '../../store/actions'

const Filters = () => {

    const dispatch = useDispatch()
    const activities = useSelector((state) => state.activities)

    useEffect(() => {
        dispatch(allActivities())
    }, [dispatch])


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
            return <option key={index}> {a.name} </option>
        })}
      </select>

      </div>

    </div>
    
    
  )
}

export default Filters