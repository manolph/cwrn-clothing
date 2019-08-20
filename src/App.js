import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path="/signin" component={SignInAndSignup}/>
     </Switch>
    </div>
  );
} 

export default App;
