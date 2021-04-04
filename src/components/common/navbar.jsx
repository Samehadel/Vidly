import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/navbar.css'
/**
 * Statless Functional Component 
 * Can't implement hooks lifecycle
 */


const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <Link className="navbar-brand" to="/">Vidly</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
                    <NavLink className="nav-item nav-link" to="/products">Products</NavLink>
                    <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;