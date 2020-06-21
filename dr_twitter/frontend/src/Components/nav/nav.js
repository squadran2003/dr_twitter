import React, { Component } from 'react';
import {Link } from 'react-router-dom'; 
import nav from './nav.css';

function Nav(){
    const linkStyle={
        color:'white',
        textDecoration: 'none',
        fontSize: '1.2em',
        fontWeight: 'bold'
    }
    return (
        <div>
            <nav className="nav-container">
                <ul className="nav">
                <li className="link"><Link style={linkStyle} to="/">Home</Link></li>
                <li className="link"><Link style={linkStyle} to="/add">Add New Tweet</Link></li>
                {/* <li className="link"><Link style={linkStyle} to="/profile">Profile </Link></li> */}
                
                <li className="last-link"><a href="/logout/">Logout</a></li>

                </ul>
            </nav>
        </div>
      );
    
}


export default Nav;