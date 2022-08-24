import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import style from './createActivity.module.css'
import { useEffect } from 'react'
import { allCountries, allActivities } from '../../store/actions'
import { names } from '../continents/Continents.jsx'

const CreateActivity = () => {
    const countriesBD = useSelector((state) => state.allCountries).map(e => {return {name: e.name, continent: e.continents, flags: e.flags}})
    const activities = useSelector((state) => state.activities).map(e => e.name.toLowerCase())
    const continents = names
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(allCountries())
        dispatch(allActivities())
    }, [dispatch])

    
    //////////////////////////////////////////// LOCAL STATES //////////////////////////////////
    
    const [error, setError] = useState({})
    const [countryF, setCountryF] = useState([])
    /* const [countries, setCountries] = useState([]) */
    const [activity, setActivity] = useState({});
    const [flags, setFlags] = useState([])
    
    
    ////////////////////////////////////// FUNCIONES ///////////////////////////////////////////
        
    const handleOnChange = (e) => { // FUNCION QUE LLENA EL ESTADO CON LA INFORMACIÓN
        e.preventDefault()
        setActivity({
            ...activity,
            [e.target.name]: e.target.value,
            countries: []
          })

          setError(validate({
            ...activity,
            [e.target.name]: e.target.value,
            
          }))
        };

       
    const handleSubmit = async (e) => {  // FUNCIÖN CREA ACTIVIDAD AL POST
        e.preventDefault()
        let post = await axios.post("http://localhost:3005/activities/", activity) 
        
        /* setActivity({}) */
        alert("The Activity " + post.data.name + " Was Created")
        window.history.back();
    };

    
    ///////////////////////////////////////////////////// FORM VALIDATION ////////////////////////////////////////////////////////

    const validate = (input) => {
        let error = {}
        console.log("input", input)
        if (!input.name) {
            error.name = "Name is required"
        }
    
        else if (activities.includes(input.name.toLowerCase())) {
            error.name = "the Activity is alredy Created"
        }
    
        else if (input.name.length > 18) {
            error.name = "text length is not allowed"
        }
    
        else if (!input.difficulty) {
            error.difficulty = "Need to rate"
        }
    
        else if (!input.duration) {
            error.duration = "Please set the duration"
        }
    
        else if (!input.season) {
            error.season = "Please Select a season"
        }
        
        else if (!input.countries) {
            error.countries = "Please Select at least one country"
        }

        return error
    }
        
    const fill_countries = (e) => {  // FUNCION LLENA EL ESTADO DE PAISES QUE VAN A RECIBIR LA ACTIVIDAD
        e.preventDefault()
       /*  if (!countries.includes(e.target.value)) */
        setActivity({
            ...activity,
            countries: [...activity.countries, e.target.value]
        })
    };

    const continentFiltred = async (e) => {
        e.preventDefault()
        const y = e.target.value
        const x = await countriesBD.filter(e => e.continent === y)
        setCountryF([...x])
        
    };

   

    const showFlags = async (e) => {
        e.preventDefault()
        const y = e.target.value
        const x = await countriesBD.find(e => e.name === y)
        if (!flags.find(e => e.name === y)) {
        setFlags([
            ...flags,
            x
        ]
        )
    }
    };
    

    const removeCountries = (e) => {
        e.preventDefault()
       
    };

  return (
    <div className={style.prueba}>
        <h1>Create Activity</h1>
        <button>Back</button>
    <form onSubmit={(e) => handleSubmit(e)}>
        <section className={style.container}>
        <div name="Name, Difficulty, Durarion, Season">  
            
            <legend> Name:
                <div>
                    <input 
                        onChange={(e) => handleOnChange(e)} 
                        className={style.input} 
                        type="text"
                        name="name"
                        value={activity.name}/>

                    {error.name ? <p>{error.name} ❌</p> : ""} 
                </div> <br/><br/>
            </legend>


            <legend> Difficulty:
                <div >
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="1" name="difficulty" value="1"/>1
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="2" name="difficulty" value="2"/>2
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="3" name="difficulty" value="3"/>3
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="4" name="difficulty" value="4"/>4
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="5" name="difficulty" value="5"/>5
                    {error.difficulty ? <p>{error.difficulty} ❌</p> : ""} 
                </div> <br/><br/>
             </legend>
        
            <legend> Duration: (in Days)
                <div>
                    <input  onChange={(e) => handleOnChange(e)} 
                            type="number"
                            name="duration"
                            value={error.duration} />
                {error.duration ? <p>{error.duration} ❌</p> : ""} 
                </div> <br/>
            </legend>

            <legend> Season:
                <div>
                    <select onChange={(e) => handleOnChange(e)} className={style.selector} name='season' value={error.activity}  > 
                        <option>Spring</option>
                        <option>Winter</option>
                        <option>Auntum</option>
                        <option>Summer</option>
                    </select>
                    <a>{error.season ? <p>{error.season} ❌</p> : ""}</a>
                </div> <br/><br/>
            </legend>
        
        </div>

        <div name='Continents, Countries'>
            <legend> Continent:
                <div>
                    <select onClick={(e) => continentFiltred(e)} className={style.selector}> 
                                    <option>Select Continent...</option>
                                {continents.map((c, i) => {
                                    return <option key={i}>{c}</option>
                                })}
                    </select>
                </div> <br/><br/>
            </legend>

            <legend> Country:
                <div> 
                    <select className={style.selector} 
                            /* onChange={(e) => handleOnChange(e)}   */
                            name="countries" value={activity.countries}> 
                                untr
                                {countryF && countryF?.map((c, i) => {
                                    return (
                                            <option 
                                                onClick={(e) => {
                                                    showFlags(e)
                                                    fill_countries(e)
                                                    removeCountries(e)
                                                }}   
                                                key={i}> {c.name} 
                                           </option>
                                    )
                                })}
                        </select>
                    <a> {error.countries ? <p>{error.countries} ❌</p> : ""}</a>
                </div>
         </legend>

            <div className={style.imgContainer}> 
                    {flags && flags.map((e, i) => {
                    return <img 
                                onClick={(e) => removeCountries(e)}
                                className={style.image} 
                                name={e.name}
                                key={i} 
                                src={e.flags} 
                                width='50'
                                 height="30"/>
            }) } </div>
         
        </div>
        </section>
         <input disabled={Object.keys(error).length === 0 ? false : true} type="submit" value="Create"/>
    </form>
    </div>
  )
}

export default CreateActivity