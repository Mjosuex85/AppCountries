import React from 'react'
import style from './paginate.module.css'

const Paginate = (props) => {
    const pages = Math.round(props.countries.length / 10)
    const pagesArr = []
        for (var i = 0; i < pages; i++ ) {
            pagesArr.push(i + 2)
        }

  return (
    <div className={style.container}>  
 {/*    <h5>start {props.start}</h5>
    <h5>finish {props.finish}</h5>
    <h5>{props.countries.length}</h5> */}
            <button 
                disabled={props.start === 0 ? true : false}
                onClick={(e) =>props.previous(e)}> Previous
            </button>

            {/* <nav> 
                {pagesArr && pagesArr.map((p) => {
                    return <li key={p}> {p}</li>
                })}
            </nav> */}
            
            <button 
                disabled={props.finish >= props.countries.length || props.finish < 9 ? true : false}
                onClick={(e) =>props.next(e)} >Next
            </button> 

           
    </div>
  )
}

export default Paginate