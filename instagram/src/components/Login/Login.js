// import React from 'react';
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            isLoggedIn: props.isLoggedIn,
            inactive: window.localStorage.getItem('loginActive')
        }
    }

    SetUser = e => {
        e.preventDefault();
        window.localStorage.setItem('loginActive', 'inactive')
        this.setState({
          user: this.state.user,
          password: this.state.password,
          inactive: window.localStorage.getItem('loginActive')
        });
        window.localStorage.setItem('user', JSON.stringify(this.state.user));
        window.localStorage.setItem('isLoggedIn', true);
      }
    
    HandleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render(){
        return (
            <form className='Login' id={this.state.inactive} onSubmit={this.SetUser}>
            <input
                value={this.state.user}
                className='user-entry-field'
                name='user'
                type='text'
                placeholder='Enter Username'
                onChange={this.HandleChanges}
            />
                <input
                value={this.state.password}
                className='pw-entry-field'
                name='password'
                type='password'
                placeholder='Enter Password'
                onChange={this.HandleChanges}
            />
            <button type='submit'>Log In</button>
            </form>
        )
    }
}

export default Login;