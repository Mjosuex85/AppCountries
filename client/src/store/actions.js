import axios from "axios";
export const REQUEST_COUNTRIES = "REQUEST_COUNTRIES"
export const COUNTRIES_SEARCHED = "COUNTRIES_SEARCHED"
export const ALL_ACTIVITIES = "ALL_ACTIVITIES"

const url = `http://localhost:3005/countries`

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

