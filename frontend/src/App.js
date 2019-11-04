import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navigation from './components/navigation';
import Start from './components/start';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Footer from './components/footer';
function App() {
  return (
    
    <Router>
      <Navigation/>
      <div>
        <Route path="/"  exact component={Start} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
