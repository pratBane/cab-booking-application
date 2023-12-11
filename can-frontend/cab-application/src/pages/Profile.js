import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container1">
                    <div class="left_Side">
                        <div class="profileText">
                            <h2>Your Profile</h2>
                        </div>
                        <div class="profile-btn">
                            <Link to="/change_password" class="text-btn">Change Password</Link>
                        </div>
                    </div>
                    <div class="right_Side">
                        <div class="row">
                            <h2>Edit Profile</h2>
                        </div>
                        <div class="row">
                            <form class="form">
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">Full Name</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" placeholder="Enter your name" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">User Name</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" placeholder="Enter your user name" required />
                                    </div>
                                </div>
                                {/* 
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">Password</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="password" placeholder="********" required />
                                    </div>
                                </div> */}
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">Address</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" placeholder="Enter your address" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">Contact Number</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" placeholder="Enter your contact number" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">Email ID</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" placeholder="Enter your Email ID" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3"></div>
                                    <div class="col span-2-of-3">
                                        <input class="button" type="submit" value="Submit" />
                                    </div>
                                </div>
                            </form >
                        </div >
                    </div >
                </div >
                <Footer />
            </div>
        )
    }
}
export default Profile;