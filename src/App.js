import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      }else{
        this.setState({ currentUser: authUser })
      }
    })
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
       <Header currentUser={this.state.currentUser}/>
       <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInAndSignup}/>
       </Switch>
      </div>
    );
  }
} 

export default App;
