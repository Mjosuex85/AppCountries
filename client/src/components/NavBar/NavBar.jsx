import React from 'react'
import style from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import ContainerAct from '../createActivity/ContainerAct.jsx'

const NavBar = () => {
  return (
    <div className={style.container}>
        <h1> Countries APP</h1>
        <SearchBar/>
        <ContainerAct/>
        
    </div>
  )
}

export default NavBar