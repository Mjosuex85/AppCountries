import React from 'react'
import style from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'

const NavBar = () => {
  return (
    <div className={style.container}>
        <h1> Countries APP</h1>
        <SearchBar/>
    </div>
  )
}

export default NavBar