import React from 'react'
import AUTH_SERVICE from '../../../services/AuthService';

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        message: null
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmission = event => {
        event.preventDefault();

        const { email, password } = this.state;
        AUTH_SERVICE.login({ email, password })
            .then(responseFromServer => {
                const { user } = responseFromServer.data;
                //Lift user data to App.js
                this.props.onUserChange(user);
                //Redirect user after sign up
                this.props.history.push('/');
            })
            .catch(err => {
                if(err.response && err.response.data) {
                    return this.setState({ message: err.response.data.message });
                }
            });
    };

    render(){
        return (
            <>
                <section>
                    <h2>LogIn</h2>
                    <form onSubmit={this.handleFormSubmission}>
                        <label>
                            Email:
                            <input 
                                name='email'
                                type='email'
                                placeholder='Type your email'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                name='password'
                                type='password'
                                placeholder='*****'
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        
                        <button>LogIn</button>
                    </form>
                    {this.state.message && <div> {this.state.message} </div>}
                </section> 
            </>
        );
    }
}
