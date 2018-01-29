import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';

class Film extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: [],
        };
    }

    componentDidMount() {

        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((res) => {
                return res.json();
            })
            .then(
            (data) => {
                this.setState({ a: data });
            });


    }

    render() {

        return (

            <div key={this.state.a.id} className="card">
                <div className="t">
                    <div>Title: {this.state.a.title}</div>
                </div>
                <div className="d">
                    <div>Description: {this.state.a.description}</div>
                </div>
                <div className="di">
                    <div>Director: {this.state.a.director}</div>
                </div>
                <div className="c">
                    <div>Producer: {this.state.a.producer}</div>
                </div>
                <div className="r">
                    <div>Release Date: {this.state.a.release_date}</div>
                </div>
                <div className="rt">
                    <div>RT Score: {this.state.a.rt_score}</div>
                </div>
            </div>
        );

    }
}

export default Film;