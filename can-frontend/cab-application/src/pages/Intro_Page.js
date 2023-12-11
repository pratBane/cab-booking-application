import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro_Page extends React.Component {
    render() {
        return (
            <div className="App_login">
                <div class="intro-card">
                    <div class="row">
                        <h2>Welcome to Cab Booking Application</h2>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-2 intro-box">
                        <Link to="/login_customer">Sign in as Customer</Link>
                        </div>

                        <div class="col span-1-of-2 intro-box">
                        <Link to="/login_admin">Sign in as Admin</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Intro_Page;