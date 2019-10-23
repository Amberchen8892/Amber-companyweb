import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Navibar from './components/Navibar';
import Footer from './pages/Footer';
import Home from './pages/Home'
import Signup from './pages/Signup'



function App() {
  return (
    <React.Fragment>
      <Router>
      <Navibar />
      <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/signup' component={Signup} /> 
         
           
        </Switch>
      <Footer />
      </Router>
    </React.Fragment>
    
  );
}

export default App;
