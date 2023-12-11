import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login_Customer extends React.Component {
    render() {
        return (
            <div className="App_login" id="cus_login">
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
                        <Link to="./dashboard" class="login_a"><input type="Submit" value="Continue" className="btn_login" /></Link>
                        <Link to="/register" class="login_p"><p>Register Now</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login_Customer;