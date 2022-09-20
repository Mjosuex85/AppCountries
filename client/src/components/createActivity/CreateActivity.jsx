import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import style from './createActivity.module.css'
import { useEffect } from 'react'
import { allCountries, allActivities } from '../../store/actions'
import { NavLink } from 'react-router-dom'
import icon from '../NavBar/Coun.png'
import s from '../NavBar/navbar.module.css'

const CreateActivity = () => {
    const countriesBD = useSelector((state) => state.allCountries).map(e => {return {name: e.name, continent: e.continents, flags: e.flags}})
    const activities = useSelector((state) => state.activities).map(e => e.name.toLowerCase())
    const continents = ["World","North America", "Africa", "South America", "Antarctica", "Asia", "Oceania", "Europe"]
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
        try {
            let post = await axios.post("http://localhost:3005/activities/", activity) 
            alert("The Activity " + post.data.name + " Was Created")
            window.location.reload();
        }
        
        catch(error) {
            console.log(error)
        }
    };


    
    ///////////////////////////////////////////////////// FORM VALIDATION ////////////////////////////////////////////////////////

    const validate = (input) => {
        let error = {}

        if (!input.name) {
            error.name = "Name is required"
        }
    
        else if (activities.includes(input.name.toLowerCase())) {
            error.name = "the Activity is alredy Created"
        }
    
        else if (input.name.length > 25) {
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
    };
        
    const fill_countries = (e) => {  // FUNCION LLENA EL ESTADO DE PAISES QUE VAN A RECIBIR LA ACTIVIDAD
        e.preventDefault()
        if (!activity.countries.includes(e.target.value)) {

            setActivity({
                ...activity,
                countries: [...activity.countries, e.target.value]
            })
        }
    };

    const continentFiltred = async (e) => {
        e.preventDefault()
        const y = e.target.value
        let countries_filtred;
        
        countries_filtred = y === "World" 
        ? countriesBD
        : await countriesBD.filter(e => e.continent === y)
        function ascend(a, b) {
            if ( a.name < b.name ) { return -1; }
            if ( a.name > b.name ) { return 1; }
            return 0;
        }
        let asc = countries_filtred.sort(ascend)
        setCountryF([...asc])
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
    console.log(activity)
    console.log(activity.countries)
    
    const removeCountries = (e) => {
        e.preventDefault()
        const x = e.target.name
        setFlags([...flags].filter(e => e.name !== x))
        setActivity({
            ...activity,
            countries: [...activity.countries.filter(e => e !== x)]
        })
        
    };

  return (
    <div className={style.prueba}>
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
    </div>
  </nav>
        {/* <h2 className={style.titulo}>Create Activity</h2>
        <button className={style.btn}>Back</button> */}
    <form onSubmit={(e) => handleSubmit(e)}>
        <section className={style.container}>
        <div name="Name, Difficulty, Duration, Season">  
            
            <legend> <h6>Name:</h6>
                <div>
                    <input 
                        onChange={(e) => handleOnChange(e)} 
                        className={style.inputs} 
                        type="text"
                        name="name"
                        value={activity.name}/>

                    {error.name ? <p className={style.validate}>{error.name} </p> : ""} 
                </div> <br/>
            </legend>


            <legend> <h6>Difficulty:</h6>
                <div >
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="1" name="difficulty" value="1"/><a className={style.difficulty}> 1</a> 
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="2" name="difficulty" value="2"/><a className={style.difficulty}> 2</a>
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="3" name="difficulty" value="3"/><a className={style.difficulty}> 3</a>
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="4" name="difficulty" value="4"/><a className={style.difficulty}> 4</a>
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="5" name="difficulty" value="5"/><a className={style.difficulty}> 5</a>
                    {error.difficulty ? <p className={style.validate}>{error.difficulty}</p> : ""} 
                </div> <br/>
             </legend>
        
            <legend> <h6>Duration: (in Days)</h6>
                <div>
                    <input  onChange={(e) => handleOnChange(e)} 
                            className={style.inputs} 
                            type="number"
                            name="duration"
                            value={error.duration} />
                {error.duration ? <p className={style.validate}>{error.duration}</p> : ""} 
                </div> <br/>
            </legend>

            <legend> <h6>Season:</h6>
                <div>
                    <select onChange={(e) => handleOnChange(e)} className={style.inputs} name='season' value={error.activity}  > 
                        <option>Spring</option>
                        <option>Winter</option>
                        <option>Auntum</option>
                        <option>Summer</option>
                    </select>
                    <p>{error.season ? <p className={style.validate}>{error.season}</p> : ""}</p>
                </div> <br/>
            </legend>
        
        </div>

        <div name='Continents, Countries'>
            <legend> <h6>Continent:</h6>
                <div>
                    <select onClick={(e) => continentFiltred(e)} className={style.inputs} > 
                                    <option>Select Continent...</option>
                                {continents.sort().map((c, i) => {
                                    return <option key={i}>{c}</option>
                                })}
                    </select>
                </div> <br/>
            </legend>

            <legend> <h6>Country: <a className={style.question} href=""> <abbr title="Hover the flag to see the name of the country, then click on it to eliminate it" >❔</abbr> </a> </h6> 
                <div> 
                    <select className={style.inputs} 
                            /* onChange={(e) => handleOnChange(e)}   */
                            name="countries" value={activity.countries}> 
                                untr
                                {countryF && countryF?.map((country, index) => {
                                    return (
                                            <option 
                                                onClick={(e) => {
                                                    showFlags(e)
                                                    fill_countries(e)
                                                }}   
                                                key={index}> {country.name} 
                                           </option>
                                    )
                                })}
                        </select>
                    <p> {error.countries ? <p className={style.validate} >{error.countries} </p> : ""}</p>
                </div>
         </legend>

            <div className={style.imgContainer}> 
                    {flags && flags.map((e, i) => {
                    return <img 
                                title={e.name}
                                onClick={(e) => removeCountries(e)}
                                className={style.image} 
                                name={e.name}
                                key={i} 
                                src={e.flags} 
                                width='40'
                                height="30"
                                alt='Not Flag'/>
            }) } </div>
         
        </div>
        </section>
                <input className={style.btnc}  
                        disabled={Object.keys(error).length === 0 
                        ? false : true} type="submit" value="Create"/>
           
    </form>
    </div>
  )
};

export default CreateActivity