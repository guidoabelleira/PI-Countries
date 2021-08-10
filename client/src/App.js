import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/index';
import Nav from './components/nav/index';
import Home from './components/home/index';
import Activity from './components/activityForm/index';
import CountryDetail from './components/countryDetail/index';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/activity' component={Activity} />
        <Route exact path='/countryDetail/:id' component={CountryDetail} />
      </BrowserRouter>
    </div>
  );
}
export default App;
