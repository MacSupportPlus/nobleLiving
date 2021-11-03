

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import NavBar from './components/Navbar';
import './index.css'



// import styles from './styles.module.css';
export const App = () => {
  return (
    <div className='font-family'>
        <NavBar />
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
          </Switch>
    </div>
  );
}