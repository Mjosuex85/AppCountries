import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import style from './createActivity.module.css'
import { useEffect } from 'react'
import { allCountries } from '../../store/actions'
import { names } from '../continents/Continents.jsx'



const CreateActivity = () => {
    const countriesBD = useSelector((state) => state.allCountries).map(e => {return {name: e.name, continent: e.continents, flags: e.flags}})
    const continents = names
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(allCountries())
    }, [dispatch])


    //////////////////////////////////////////// LOCAL STATES //////////////////////////////////
   
    const [continet, setContinent] = useState("")
    const [countryF, setCountryF] = useState([])
    const [countries, setCountries] = useState([])
    const [activity, setActivity] = useState({});
    const [flags, setFlags] = useState([])

    console.log("flags", flags)

    ////////////////////////////////////// FUNCIONES ///////////////////////////////////////////
        
        const handleOnChange = (e) => { // FUNCION QUE LLENA EL ESTADO CON LA INFORMACIÓN
            e.preventDefault()
            const name = e.target.name
            const value = e.target.value
            
            setActivity({
                ...activity,
                [name]: value,
                countries: [...countries]
            })
        };
        

    const handleSubmit = async (e) => {  // FUNCIÖN CREA ACTIVIDAD AL POST
        e.preventDefault()
        let post = await axios.post("http://localhost:3005/activities/", activity) 
        
        setActivity({})
        alert("The Activity " + post.data.name + " Was Created")
    };
    
    const fill_countries = (e) => {  // FUNCION LLENA EL ESTADO DE PAISES QUE VAN A RECIBIR LA ACTIVIDAD
        e.preventDefault()
        if (!countries.includes(e.target.value))
        setCountries([
            ...countries,
            e.target.value
        ])
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
        console.log("este es el x",x)
        setFlags([
            ...flags,
            x.flags
        ])
    }

    const selectCountry = (e) => {
        e.preventDefault()
    };

  return (
    <>
        <h1>Create Activity</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <section className={style.container}>
        <div name="Name, Difficulty, Durarion, Season">  
            
            <legend> Name:
                <div>
                    <input 
                        onChange={(e) => handleOnChange(e)} 
                        className={style.input} 
                        type="text"
                        name="name"/>
                </div> <br/><br/>
            </legend>


            <legend> Difficulty:
                <div >
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="1" name="difficulty" value="1"/>1
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="2" name="difficulty" value="2"/>2
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="3" name="difficulty" value="3"/>3
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="4" name="difficulty" value="4"/>4
                    <input onChange={(e) => handleOnChange(e)} type="radio" id="5" name="difficulty" value="5"/>5
                </div> <br/><br/>
             </legend>
        
            <legend> Duration:
                <div>
                    <input  onChange={(e) => handleOnChange(e)} 
                            type="number"
                            name="duration"/>
                </div> <br/><br/>
            </legend>

            <legend> Season:
                <div>
                    <select onChange={(e) => handleOnChange(e)} className={style.selector} name='season' value={activity.season}  > 
                        <option>Spring</option>
                        <option>Winter</option>
                        <option>Auntum</option>
                        <option>Summer</option>
                    </select>
                </div> <br/><br/>
            </legend>
        
        </div>

        <div name='Continents, Countries'>
            <legend> Continent:
                <div>
                    <select onChange={(e) => continentFiltred(e)} className={style.selector}> 
                                    <option>Select Continent...</option>
                                {continents.map((c, i) => {
                                    return <option key={i}>{c}</option>
                                })}
                    </select>
                </div> <br/><br/>
            </legend>

            <legend> Country:
                <div> 
                    <select className={style.selector} /* onClick={(e) => showFlags(e)} */ onChange={(e) => handleOnChange(e)}  name="countries" /* value={"countries"} */> 
                                {countryF && countryF?.map((c, i) => {
                                    return <option 
                                                onClick={(e) => {
                                                    showFlags(e)
                                                    fill_countries(e) 
                                                } }   
                                                key={i}> {c.name} 
                                           </option>
                                })}
                    </select>
                </div>
         </legend>

            <div className={style.imgContainer}> 
                    {flags && flags.map((e, i) => {
                    return <img key={i} src={e} width='30' height="30"/>
            }) } </div>

         
        </div>
        </section>
         <input type="submit" value="Create"/>
    </form>
    </>
  )
}

export default CreateActivity