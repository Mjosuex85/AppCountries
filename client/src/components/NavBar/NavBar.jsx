import React from 'react'
import style from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import icon from './earth-globe-tool.svg'

const NavBar = () => {
  return (
    <section className={style.container}>
          <div><h1 className={style.title}> 
              <img src={icon} 
              alt="" width="30" 
              height='30'/> 
          </h1>
         </div>

      <div>
        <SearchBar/>
      </div>  

    </section>
  )
}

export default NavBar