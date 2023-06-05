import {
  GET_ALL_INFO,
  GET_MOCK_DATA,
  GET_DATE,
  SET_DAY_PER_MONTH,
} from "./actions.js";

let initialState = {
  allInfoCopy: [],
  allInfo: [],
  dates: [],
  firstMonth: "",
  allMonthDays: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    // RETURN COMPLETE INFO
    case GET_ALL_INFO:
      return {
        ...state,
        allInfo: action.payload,
        allInfoCopy: action.payload,
      };

    // TRAE LOS MESES DE LA BASE DE DATOS.
    case GET_DATE:
      return {
        ...state,
        dates: action.payload,
      };

    case SET_DAY_PER_MONTH:
      // eslint-disable-next-line no-case-declarations
      const year = action.payload?.slice(6, 10)
      // eslint-disable-next-line no-case-declarations
      const month = action.payload?.slice(10)
      // eslint-disable-next-line no-case-declarations
      let ultimoDia = new Date(year, month, 0).getDate();
      // eslint-disable-next-line no-case-declarations
      let diasMes = [];

      for (let i = 1; i <= ultimoDia; i++) {
        let dia = i.toString().padStart(2, "0");

        let mesActual = month.toString().padStart(2, "0");

        let anioActual = year.toString();

        let fecha = dia + "/" + mesActual + "/" + anioActual;
        diasMes.push(fecha);
      }

      return {
        ...state,
        allMonthDays: diasMes,
      };

    // RETURN MOCK DATA TO TEST
    case GET_MOCK_DATA:
      return {
        ...state,
        allInfo: action.payload,
        allInfoCopy: action.payload,
      };
    default:
      return state;
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

