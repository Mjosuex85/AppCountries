import React from 'react'
import { useDispatch} from 'react-redux'
import { useState} from 'react'
import { byName, setPagination } from '../../store/actions.js'
import style from './searchBar.module.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  
  const onSubmit = (event) => {
    event.preventDefault()
      dispatch(byName(search))
      dispatch(setPagination(1))
      setSearch("")
  }
  
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <div>
        <input 
          className={style.box}
          onChange={(event) => handleChange(event)} 
          type="text" value={search} /> 
          <button className={style.btn} onClick={(event) => onSubmit(event)}> Search </button>
    </div>
  )
}

export default SearchBar