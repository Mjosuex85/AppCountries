import './App.css';
import Countries from './components/countries/Countries.jsx'
import Continents from './components/continents/Continents.jsx'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div /* className="App" */>
      <NavBar/>
      <div className="App" >
        <Continents/>
        <Countries/>
      </div>
    </div>
  );
}

export default App;
