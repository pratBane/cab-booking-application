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
                            <Link to="/profile" class="text-btn">Edit Profile</Link>
                        </div>
                    </div>
                    <div class="right_Side">
                        <div class="row">
                            <h2>Change Password</h2>
                        </div>
                        <div class="row">
                            <form class="form">
                                
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">Old Password</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="password" name="old-password" placeholder="********" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">New Password</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="password" name="new-password" placeholder="********" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label class="details">Re-enter New Password</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="password" name="renew-password" placeholder="********" required />
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