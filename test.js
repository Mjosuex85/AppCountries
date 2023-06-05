import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,(applyMiddleware(thunk))
);

export default store;




import "./App.css";
import { Dashboard } from "./components/dashBoard/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllInfo, getDates, setMonthDays } from "./redux/actions";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.dates)
  const data = useSelector((state) => state.allInfo);
  const [date, setDate] = useState("track_202305");
  
  console.log("la primera fecha, luego cambia",date)

  const handleChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };


  useEffect(() => {
    dispatch(getDates());
    dispatch(getAllInfo(date));
  }, []);
  
  useEffect(() => {
    dispatch(getAllInfo(date))
    dispatch(setMonthDays(date))
  },[date]) 


  return (
    <>  
    <div style={{marginLeft: '2px', marginBottom: '20px'}}>
      <select style={{borderRadius: '20px', paddingLeft: '20px', paddingRight: '20px'}} onChange={(e) => handleChange(e)}>
        <option> Selecionar Fecha...</option>
        {dates.data?.dates.map((e, index) => {
          return <option key={index}> {e} </option>;
        })}
      </select>
    </div> 

        <Dashboard apiData={data} />
 
    </>
  );
}

export default App; 









import LastTen from "../lastTen/LastTen";
import BarChart from "../charts/barChart/BarChart";
import Users from "../general/totalUsers/Users";
import LineChart from "../charts/lineChart/LineChart";
import style from './dashboard.module.css';


export const Dashboard = (apiData) => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <LineChart data={apiData.apiData.data?.dates} />
        <BarChart data={apiData.apiData.data?.pathCount}/>
      </div>

      <div className={style.cards}>
        <LastTen data={apiData.apiData.data?.lastTen} />
        <Users data={apiData.apiData.data?.users} />
      </div>
    </div>
  );
};

