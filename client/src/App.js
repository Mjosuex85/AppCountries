import LandingPage from './components/landingPage/LandingPage.jsx'
import Home from './components/Home/Home.jsx'
import CountryDetails from './components/countryDetails/CountryDetails.jsx';
import { BrowserRouter, Route } from 'react-router-dom';  


function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/:id" render={({match}) => <CountryDetails id={match.params.id}/>}/>
      </BrowserRouter>
  );
}

export default App;
