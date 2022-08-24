import React from 'react'
import style from './paginate.module.css'

const Paginate = ({countriesPerPage, countries, paginateF}) => {
  const pageNumbers = []
    for (let i = 1;  i<=Math.ceil(countries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

  return ( 
      <div className={style.container}>
            {pageNumbers && pageNumbers.map((number, i) => (
              
                  <a key={i} className={style.numbers} 
                    onClick={() => paginateF(number)}>
                      {number}
                  </a>
            ))}

      </div>
  )
}

export default Paginate