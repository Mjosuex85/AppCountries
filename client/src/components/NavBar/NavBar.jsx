import React from 'react'
import s from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import icon from './Coun.png'
import { NavLink } from 'react-router-dom'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

const NavBar = () => {
  return (
   /*  <section className={style.container} >
          
              <div className={style.prueba}>
                
                <img  src={icon}
                  alt="" width="100" 
                  height='100'/> 
              
              <div><Link to='/createactivity'> Create Activity </Link></div>
              
              </div>
          
            <div className={style.search}>
              <SearchBar/>
            </div>

         

    </section> */
    <nav className={`navbar navbar-expand-lg navbar-light ${s.nav}`}>
    <NavLink to="/" className="navbar-brand nav-link" href="http://localhost:3000/">
      <div className={s.other}><img className={s.img} width="100px" height="90px" src={icon} alt="Not Found" /> </div>
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/countries"><span>Home</span></NavLink>
        </li>
        <li className="nav-item">
          {/* <NavLink className="nav-link" to="/worldmap"><span>World Map</span></NavLink> */}
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/createactivity"><span>Create Activity</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About"><span>About</span></NavLink>
        </li>
      </ul>
      <div>
        <a href="https://github.com/Mjosuex85" rel="noreferrer" target="_blank"><img className={s.networks} width="35px" src={github} alt="Not Found" /></a>
        <a href="https://www.linkedin.com/in/mario-vidal-8138651a1/" rel="noreferrer" target="_blank"><img className={s.networks} width="35px" src={linkedin} alt="Not Found" /></a>
      </div>
      <SearchBar/>
    </div>
    
    
  </nav>
  )
}

export default NavBar