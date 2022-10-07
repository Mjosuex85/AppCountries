import axios from "axios";
export const REQUEST_COUNTRIES = "REQUEST_COUNTRIES"
export const COUNTRIES_SEARCHED = "COUNTRIES_SEARCHED"
export const ALL_ACTIVITIES = "ALL_ACTIVITIES"
export const BY_CONTINENT = "BY_CONTINENT"
export const BY_ACTIVITIES = "BY_ACTIVITIES"
export const ORDER_ASC = "ORDER_ASC"
export const ORDER_DESC = "ORDER_DESC"
export const POPULATION = "POPULATION"
export const BY_ID = "BY_ID"
export const RESET = "RESET"
export const SET_CONTINENTS = "SET_CONTINENTS"
export const SET_PAGINATE = "SET_PAGINATE"
export const BY_AREA = "BY_AREA"
export const CONTINENT_SELECTED = "CONTINENT_SELECTED"
export const GET_WEATHER = "GET_WEATHER"
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES" 
export const CLEAR = "CLEAR"
export const BY_SEASON = "BY_SEASON"
export const BY_DIFFICULTY = "BY_DIFFICULTY"

const apiKey = "8e84108b95ef7a2c77bc1bd073ccfe77"
const url = `http://localhost:3005/countries/`

export function allCountries(){
   return async function (dispatch) {
        try {
            const countries = await axios.get(url)
            return dispatch({
                type: REQUEST_COUNTRIES,
                payload: countries.data
            })
        }

        catch(error) {
            console.log(error)
        }
   };
};

export function byName(name) {
    return async function(dispatch) {
        try {
            const searched = await axios.get(`${url}?name=${name}`)
            return dispatch({
                type: COUNTRIES_SEARCHED,
                payload: searched.data
            })
        }

        catch(error) {
            console.log(error)
        }
    };
};

export function allActivities() {
    return async function(dispatch) {
        try {
            const activities = await axios.get("http://localhost:3005/activities")
        return dispatch({
            type: ALL_ACTIVITIES,
            payload: activities.data
        })
        }

        catch(error) {
            console.log(error)
        }
    }
};

export function byId(id) {
    return async function(dispatch) {
        const byId = await axios.get(`http://localhost:3005/countries/${id}`)
        return dispatch({
            type: BY_ID,
            payload: byId.data
        })
    }
};


export function getWheather(capital) {
    console.log(capital)
    return async function(dispatch){
        const query = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Washington, D.C.&appid=8e84108b95ef7a2c77bc1bd073ccfe77&units=metric`)
        return dispatch({
            type: GET_WEATHER,
            payload: query.data
        })
        
      };
};

export function byContinente(payload) {
    return {
        type: BY_CONTINENT,
        payload
    }
};

export function byActivities(payload) {
    return {
        type: BY_ACTIVITIES,
        payload,
    }
};

export function asc(payload) {
    return {
        type: ORDER_ASC,
        payload
    }
};

export function desc(payload) {
    return {
        type: ORDER_DESC,
        payload
    }
};

export function population(payload) {
    return {
        type: POPULATION,
        payload
    }
};

export function reset(payload) {
    return {
        type: RESET,
        payload
    }
};

export function setContinents(payload) {
    return {
        type: SET_CONTINENTS,
        payload
    }
};

export function setPagination(payload) {
    return {
        type: SET_PAGINATE,
        payload
    }
};

export function clear(payload) {
    return {
        type: CLEAR,
        payload
    }
}

export function byArea(payload) {
    return {
        type: BY_AREA,
        payload
    }
};


export function continentSelected(payload) {
    return {
        type: CONTINENT_SELECTED,
        payload
    }
};

export async function earaseActivities(payload) {
        try{
            const {id, country} = payload
            console.log(id)
            let x = await axios.delete(`http://localhost:3005/countries/${country}?idname=${id.toString()}`)
            return x
        }
        catch(error) {
            console.log(error)
        }
    
};

export function bySeason(payload){
    return {
        type: BY_SEASON,
        payload
    }
};

export function byDifficulty(payload) {
    return {
        type: BY_DIFFICULTY,
        payload
    }
};