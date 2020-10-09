import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

//importing of the pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

//importing the components needed
import Toggle from './components/toggle/Toggle'
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Router>
        <Toggle />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
