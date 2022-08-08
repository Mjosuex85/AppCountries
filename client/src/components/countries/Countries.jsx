import React from 'react'
import CardsContainers from '../cardsContainers/CardsContainers'
import style from './countries.module.css'

const Countries = () => {
  return (
    <div className={style.container}>
        <CardsContainers/>
    </div>
  )
};

export default Countries