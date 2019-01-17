// import React from 'react';
import React, { Component } from 'react';
import './Login.css';
import bwlogo from '../img/blackonwhite.png'
import bwcam from '../img/bwicon.jpg'

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
            <div className='login-overlay' id={this.state.inactive} >
                <div className='login-box'>
                    <img src={bwlogo} alt='Black and White Logo' className='bwcursive'/>
                    <img src={bwcam} alt='Black and White Camera' className='bwcam'/>
                <form className='Login' onSubmit={this.SetUser}>
                    <input
                        value={this.state.user}
                        className='user-entry-field'
                        name='user'
                        type='text'
                        placeholder='Username'
                        onChange={this.HandleChanges}
                        required
                    />
                    <input
                        value={this.state.password}
                        className='pw-entry-field'
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={this.HandleChanges}
                        required
                    />
                <button type='submit' className='login-button'>Log In</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Login;