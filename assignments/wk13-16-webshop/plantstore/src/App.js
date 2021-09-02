import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ModalContainer, ModalRoute } from 'react-router-modal';
import './styles/app.css'

import { connect } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext"

import Homepage from "./components/pages/Homepage"

// import ProductOverview from "./components/pages/ProductOverview";
import ProductDetails from "./components/pages/ProductDetails";
import PlantsOverview from "./components/pages/PlantsOverview";
import DriedFlowersOverview from "./components/pages/DriedFlowersOverview";
import AccessoiresOverview from "./components/pages/AccessoiresOverview";



import Cart from "./components/cart/Cart";

import Signup from "./components/userpages/Signup"
import Dashboard from "./components/userpages/Dashboard"
import Login from "./components/userpages/Login"
import PrivateRoute from "./components/userpages/PrivateRoute"
import ForgotPassword from "./components/userpages/ForgotPassword"
import UpdateProfile from "./components/userpages/UpdateProfile"

import Navbar from "./components/Navbar";

import Test from "./components/Test";




function App({ current }) {
  return (
    <Router>
      <div className="app">

        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/test" component={Test} />
            <Route exact path="/" component={Homepage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <ModalRoute path="/login" component={Login} />
            <ModalRoute path="/password-reset" component={ForgotPassword} />
            {/* <Route exact path="/products" component={ProductOverview} /> */}
            <Route path="/plants" component={PlantsOverview} />
            <Route path="/driedflowers" component={DriedFlowersOverview} />
            <Route path="/accessoires" component={AccessoiresOverview} />
            <Route exact path="/cart" component={Cart} />
            {!current ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/product/:id" component={ProductDetails} />
            )}
          </Switch>
          <ModalContainer />
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
