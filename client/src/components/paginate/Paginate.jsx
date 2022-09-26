import React from 'react'
import style from './paginate.module.css'
import arrow from './arrow.png'

const Paginate = ({countriesPerPage, countries, paginateF, currentPage}) => {
  const pageNumbers = []
    for (let i = 1;  i<=Math.ceil(countries/countriesPerPage); i++) {
        pageNumbers.push(i)
    };

  
    const next = () => {
      
      if (currentPage >= pageNumbers[pageNumbers.length - 1]) {
        return 
      }
      else {
        paginateF(currentPage + 1)
      }
    };

    const previous = () => {
      if (currentPage <= 1) {
        return
      }
      else {
        paginateF(currentPage - 1)
      }
    };


  return ( 
      <div className={style.container}>
           { <img onClick={previous} src={arrow} className={style.arrowLeft} alt="..." width='20'/>}
           
           {pageNumbers && pageNumbers.map((number, i) => (
                  <a  key={i} className={ currentPage === number ? style.active : style.numbers} 
                    onClick={() => paginateF(number)}>
                      {number}
                  </a>
            ))}
      {<img  onClick={next} src={arrow} className={style.arrowRigth} alt="..." width='20'/> }

      </div>
  )

};

export default Paginate