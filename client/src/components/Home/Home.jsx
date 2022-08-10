import React from 'react'
import Countries from '../countries/Countries.jsx'
import Continents from '../continents/Continents.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import '../../App.css'

const Home = () => {
  return (
    <div /* className="App" */>
      <NavBar/>
      <div className="App" >
        <Continents/>
        <Countries/>
      </div>
    </div>
  )
}

export default Home