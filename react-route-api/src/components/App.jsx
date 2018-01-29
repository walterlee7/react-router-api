import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Title from './Title';
import People from './People';
import Stats from './Stats';
import Film from './Film';

class App extends Component {
    
    render () {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Link to="/">Home Page</Link>
                    <br></br>
                    <Link to="/title">Title Page</Link>
                    <br></br>                                 
                    <Link to="/people">People Page</Link>
                    <br></br>
                    <Link to="/stats">Stats Page</Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/title" component={Title} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/stats" component={Stats} />
                        <Route path="/title/:id" component={Film} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;