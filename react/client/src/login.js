import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div>
                {/* Login */}
                <meta charSet="utf-8"/>
                <title>Login</title>
                <header>
                    <h1>Sign In</h1>
                </header>
                <div id="loginForm">
                    <form action="/home" method="get">
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input id="email" type="email" placeholder="Enter your Email"/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input id="password" type="password" placeholder="Enter your password"/>
                        </div>
                        <br/>
                        <button id="loginButton">Login</button>
                    </form>
                </div>
                <br/>
                <p>NAV LINKS</p>
                <nav>
                    <li><Link to='/'>Home</Link></li>
                </nav>
            </div>
        );
    }
}

export default Login;