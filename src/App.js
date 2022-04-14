import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PhotoDecor from './pages/PhotoDecor';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/photodecor">
            <PhotoDecor />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
