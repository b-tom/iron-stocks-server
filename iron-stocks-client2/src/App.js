import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AUTH_SERVICE from './services/AuthService';

import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

import Home from './components/Home';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';


export default class App extends React.Component {
    state = {
        currentUser: null,
    }

    componentDidMount = () => {
        Promise.all([AUTH_SERVICE.getAuthenticatedUser()])
        .then(responseFromServer => {
            const { user } = responseFromServer[0].data;

            this.setState({ currentUser: user });
        })
        .catch(err => console.log(err));
    };

    updateUser = user => {
        this.setState({ currentUser: user });
    };

    render() {
        console.log('User in client: ', this.state.currentUser);
        return (
            <div className='App'>
                <BrowserRouter>
                    <nav>
                        <NavBar currentUser={this.state.currentUser} onUserChange={this.updateUser} />
                    </nav>
                    <Switch>
                        <Route exact path='/' render={props => <Home />} />
                        <Route path='/signup-page' render={props => <Signup {...props} onUserChange={this.updateUser} />} />
                        <Route path='/login-page' render={props => <Login {...props} onUserChange={this.updateUser} />} />

                        <ProtectedRoute 
                            path='/profile'
                            authorized={this.state.currentUser}
                            redirect={'/signup-page'}
                            render={props => <Profile {...props} currentUser={this.state.currentUser} />}
                        />
                    </Switch>

                    <footer style={{ clear: 'both' }}>Made with ❤️</footer>
                </BrowserRouter>
            </div>
        );
    }
}
