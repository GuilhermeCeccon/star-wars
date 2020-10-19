/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Films from './pages/Films'
import Planets from './pages/Planets'
import Peoples from './pages/Peoples'
import Species from './pages/Species'
import Starships from './pages/Starships'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/films" exact={true} component={Films} />
        <Route path="/planets" exact={true} component={Planets} />
        <Route path="/peoples" exact={true} component={Peoples} />
        <Route path="/species" exact={true} component={Species} />
        <Route path="/starships" exact={true} component={Starships} />
      </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
