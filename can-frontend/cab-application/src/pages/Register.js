import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return (
            <div className="App_login" id="App_register">
                <div class="table_register">
                    <div class="row">
                        <h2>Register</h2>
                    </div>
                    <div class="row">
                        <input type="text" placeholder="Username" id="type_login" />
                    </div>

                    <div class="row">
                        <input type="text" placeholder="Email ID " id="type_login" />
                    </div>
                    <div class="row">
                        <input type="text" placeholder="Contact" class="type_login" />
                    </div>
                    <div class="row">
                        <input type="password" placeholder="********" class="type_login" />
                    </div>
                    <div class="row">
                        <textarea name="address" id="address" placeholder="Your Address"></textarea>
                    </div>

                    <div class="row">
                        <Link to="./dashboard" class="login_a"><input type="Submit" value="Continue" className="btn_login" /></Link>
                        <Link to="/login_customer" class="login_p"><p>Already a Customer? Login Now</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;