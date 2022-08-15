import React from 'react'
import style from './allcountriesmap.module.css'
import globe from './earth-globe-tool.svg'
import { useDispatch } from 'react-redux'
import { reset } from '../../store/actions'


const AllCountriesMap = () => {
    
    const dispatch = useDispatch()

    function handleClick(e) {
    e.preventDefault()
    dispatch(reset())
}
  return (

    <div onClick={(e) => handleClick(e)} className={style.container}>
        {<img src={globe} alt="ALL COUNTRIES" 
            width="60" 
            height="30"
            />} 
    </div>
  )
}

export default AllCountriesMap