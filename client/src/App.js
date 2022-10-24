import LandingPage from './components/landingPage/LandingPage.jsx'
import Home from './components/Home/Home.jsx'
import CountryDetails from './components/countryDetails/CountryDetails.jsx';
import { BrowserRouter, Route } from 'react-router-dom';  
import CreateActivity from './components/createActivity/CreateActivity.jsx'
import Worldmap from './components/worldMap/WorldMap.jsx'

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/countries" component={Home}/>
        <Route exact path="/countries/:id" render={({match}) => <CountryDetails id={match.params.id}/>}/>
        <Route exact path="/createactivity" component={CreateActivity}/>
        <Route exact path='/worldmap' component={Worldmap}/>
      </BrowserRouter>
  );
}

export default App;
