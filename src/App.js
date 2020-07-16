import React from 'react';
import Header from "../src/components/Header/Header"
import HomePage from './components/HomePage/HomePage'
import { Switch, Route } from 'react-router-dom'
import InfoHero from './components/Grid/Card/Info/InfoHero';





const App = () => {


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hero-info/:id" component={InfoHero}></Route>
      </Switch>
    </div>
  );

}
export default App;
