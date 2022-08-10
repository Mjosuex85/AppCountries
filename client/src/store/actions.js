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
}

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

