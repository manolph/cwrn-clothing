import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        console.log(authUser)
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }else{
        setCurrentUser(authUser)
      }
    })
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
       <Header/>
       <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignup/>) }/>
       </Switch>
      </div>
    );
  }
} 

const mapStateToProps = ({ user }) => {
 return {
  currentUser: user.currentUser
 } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
