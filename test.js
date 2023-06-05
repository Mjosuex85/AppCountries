import axios from "axios";
import status from "../data";

export const GET_ALL_INFO = "GET_ALL_INFO";
export const GET_MOCK_DATA = "GET_MOCK_DATA";
export const GET_DATE = "GET_DATE";
export const SET_DAY_PER_MONTH = "SET_DAY_PER_MONTH";

const DATA_URL = "http://localhost:7000/api/admin/Status/Data";
const DATE_URL = "http://localhost:7000/api/admin/Status/Dates";
const token =


// trae la toda el json con toda la información

export function getAllInfo(date) {

  return function (dispatch) {
    axios.get(`${DATA_URL}?trackDate=${date}`, {   
      headers: {
          Authorization: token,
        }
      })
      .then((res) => {
        dispatch({
          type: GET_ALL_INFO,
          payload: res.data

        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// trae la información de las fechas guardadas en los tracks de mongodb
// ejemplo ----> track_202305

export function getDates() {
  return function(dispatch) {
    axios.get(DATE_URL, {
      headers: {
        'Authorization': token
      }
    }).then((res) => {
       dispatch({
        type: GET_DATE,
        payload: res.data
       })
    })
   
  }
}

// modifica la fecha para poder hacer los meses

export function setMonthDays(payload) {
  return function(dispatch) {
    dispatch({
      type: SET_DAY_PER_MONTH,
      payload: payload
    })
  }
}



export function getMockData() {
  
  return function (dispatch) {
    dispatch({
      type: GET_MOCK_DATA,
      payload: status,
    });
  };

}

