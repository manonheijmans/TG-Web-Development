import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './styles/app.css'

import { connect } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext"

import Homepage from "./components/pages/Homepage"

import ProductOverview from "./components/pages/ProductOverview";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/pages/ProductDetails";

import Signup from "./components/userpages/Signup"
import Dashboard from "./components/userpages/Dashboard"
import Login from "./components/userpages/Login"
import PrivateRoute from "./components/userpages/PrivateRoute"
import ForgotPassword from "./components/userpages/ForgotPassword"
import UpdateProfile from "./components/userpages/UpdateProfile"

import Navbar from "./components/Navbar";




function App({current}) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AuthProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/products" component={ProductOverview} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={ProductDetails} />
          )}
        </Switch>
      </AuthProvider>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
