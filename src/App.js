import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import Modal from './components/Modal';




class App extends Component {
    render(){
      return(
        <React.Fragment>
            <Navbar/>
                    <Route exact path="/login">
          <Login />
        </Route>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route path="/registrations" component={Registration} />
            </Switch>
            <Modal />
        </React.Fragment>
      
      );
    }
}
export default App;
