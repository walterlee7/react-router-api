import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: [],
        }

    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ a: data });
            });
    }

    render() {
       
        let listItems = this.state.a.map((item) => {

            return (

                <div key={item.id} className="card">
                    <div className="t">
                        <div>Title: {item.title}</div>
                        <Link to={`/title/${item.id}`}>More Info</Link>
                    </div>
                    <div className="d">
                        <div>Description: {item.description}</div>
                    </div>
                </div>
            );
        });

        return (
            <div className="h5">{listItems}</div>
        );
    }
}

export default Title;