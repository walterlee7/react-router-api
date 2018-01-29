import React, { Component } from 'react';
import './App.css';
import logo from '../studiologo.jpg';

class Header extends Component {
    render() {
        
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default Header;