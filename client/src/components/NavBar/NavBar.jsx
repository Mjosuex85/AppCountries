import React from 'react'
import style from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import ContainerAct from '../createActivity/ContainerAct.jsx'
import icon from './earth-globe-tool.svg'

const NavBar = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}> 
            <img src={icon} 
              alt="" width="30" 
              height='30'/> Countries APP 
        </h1>
        {/* <ContainerAct/>
        <SearchBar/> */}
    </div>
  )
}

export default NavBar