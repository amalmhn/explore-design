import React from 'react'
import './App.css';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import ToursPage from './Pages/ToursPage';
import ItineraryPage from './Pages/ItineraryPage/ItineraryPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import BookingPage from './Pages/BookingPage/BookingPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/tours" component={ToursPage}/>
          <Route path="/itinerary" component={ItineraryPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/booking" component={BookingPage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
