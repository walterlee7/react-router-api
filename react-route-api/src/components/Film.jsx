import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';

class Film extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: [],
        }

    }

    componentDidMount() {
        console.log(this.props.match.params.id);


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

        console.log(this.state.a);

        return (

            <div key={this.state.a.id} className="card">
                <div className="t">
                    <div>Title: {this.state.a.title}</div>
                </div>
                <div className="d">
                    <div>Description: {this.state.a.description}</div>
                </div>
            </div>
        );

    }
}

export default Film;