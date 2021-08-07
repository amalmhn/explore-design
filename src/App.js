import React from 'react'
import './App.css';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import ToursPage from './Pages/ToursPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/tours" component={ToursPage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
