import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';

export default class Navbar extends React.Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-dark px-sm-5">
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand w-25"/>
            </Link>
            <ul className="navbar-nav align-item-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item ml-5">
                    <Link to="/shop" className="nav-link">Products</Link>
                </li>
                <li className="nav-item ml-5">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item ml-5">
                    <Link to="/registrations" className="nav-link">Registration</Link>
                </li>
            </ul>
            <Link to='/cart' className="ml-auto">
                <Btn>
                    <i className="fa fa-shopping-cart  mr-2"/>Cart
                </Btn>
            </Link>
           </nav>
        )
    }
}

const Btn = styled.button`
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  background:transparent;
  border-radius:3px;
  border:1px solid var(--mainyellow);
`;
