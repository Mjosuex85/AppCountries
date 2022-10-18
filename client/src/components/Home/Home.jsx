import React from 'react'
import Countries from '../countries/Countries.jsx'
import Continents from '../continents/Continents.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Paginate from '../../components/paginate/Paginate.jsx'
import style from './home.module.css'
import '../../App.css'
import Footer from '../Footer/Footer.jsx'

const Home = () => {
  return (
    <div className={style.styles}>
      <NavBar/>
      <div className="App" >
      {/*   <Continents/> */}
        <Countries/>
      </div>
        <Footer/>
    </div>
  )
}

export default Home