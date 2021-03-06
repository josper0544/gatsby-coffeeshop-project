import React, { Component } from 'react';
import {Link} from "gatsby";
import Logo from "../../images/Logo.svg";
import {FaCartArrowDown} from "react-icons/fa";

// The Navbar Component stores the Navbar item data in the state property

export default class Navbar extends Component {
    state={
        navbarOpen: false,
        css:'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/',
                text:'home'
            },
            {
                id:2,
                path:'/about',
                text:'about'
            },
            {
                id:3,
                path:'/specials',
                text:'specials'
            }
        ]
    };
    navbarHandler = () => {
        this.state.navbarOpen? this.setState(
            {navbarOpen:false,
            css: "collapse navbar-collapse"})
            : this.setState(
            {navbarOpen: true,
            css: "collapse navbar-collapse show"});
        
    };
  render() {
    return (
      <nav className = "navbar navbar-expand-sm bg-light navbar-light">
          <Link to="/" className = "navbar-brand">
            <img src = {Logo} alt="logo" />
            {/* attribution text */}
          </Link>
          <button  className = "navbar-toggler" type = "button" onClick = {this.navbarHandler}>
            <span className = "navbar-toggler-icon"></span>
          </button>
          <div className = {this.state.css}>
              <ul className="navbar-nav mx-auto">
                  {this.state.links.map(link => {
                      return (
                          <li key = {link.id} className = "nav-item">
                              <Link to={link.path} className = "nav-link text-capitalize">
                                {link.text}
                              </Link>
                          </li>
                          
                      );
                  })}
                  <li className="nav-item ml-sm-5">
                        <FaCartArrowDown className="cart-icon snipcart-checkout " />
                  </li>
              </ul>
              
          </div>
      </nav>
    );
  }
};
