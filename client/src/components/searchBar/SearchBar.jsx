import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useState, Dispatch } from 'react'
import { byName } from '../../store/actions.js'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  
  const onSubmit = (event) => {
    event.preventDefault()
      dispatch(byName(search))
      setSearch("")
  }
  
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <div>
        <input 
          onChange={(event) => handleChange(event)} 
          type="text" value={search} /> 
          <button onClick={(event) => onSubmit(event)}> Search </button>
    </div>
  )
}

export default SearchBar