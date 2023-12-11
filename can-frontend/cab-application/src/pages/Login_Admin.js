import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login_Admin extends React.Component {
    render() {
        return (
            <div className="App_login">
                <div class="table_login">
                    <div class="row">
                        <h2>Login </h2>
                    </div>
                    <div class="row">
                        <input type="text" placeholder="Email ID " id="type_login" />
                    </div>
                    <div class="row">
                        <input type="password" placeholder="********" class="type_login" />
                    </div>
                    <div class="row">
                        <Link to="./home"><input type="Submit" value="Continue" className="btn_login" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login_Admin;