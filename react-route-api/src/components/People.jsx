import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';

class People extends Component {
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
                        <div>Director: {item.director}</div>
                        <Link to={`/title/${item.id}`}>More Info</Link>
                    </div>
                    <div className="d">
                        <div>Producer: {item.producer}</div>
                    </div>
                </div>
            );
        });

        return (
            <div className="h5">{listItems}</div>
        );
    }
}

export default People;