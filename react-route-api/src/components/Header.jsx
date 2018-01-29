import React, { Component } from 'react';
import './App.css';
import logo from '../studiologo.jpg';

class Header extends Component {
    render() {

        return (
            <header className="App-header">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </header>
        );
    }
}

export default Header;