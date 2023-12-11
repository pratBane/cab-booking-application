import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class Add_Driver extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section class="section-dashboard">
                    <div class="card">
                        <div class="row">
                            <h2>Add New Driver</h2>
                        </div>
                        <div class="row">
                            <form action="" class="contact-form">
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="name">Name</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="name" id="name" placeholder="Your Name" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="name">Email</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="email" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Password</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="password" name="password" id="password" placeholder="Your Password" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Contact Number</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="contact" id="contact" placeholder="Your Contact Number" required />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="news">Address</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <textarea name="address" id="address" placeholder="Your Address"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="news">License No</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="license-no" id="license-no" placeholder="Your License Number" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="news">Rating</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="rating" id="rating" placeholder="Enter Rating" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="news">Cab Id</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="cab-id" id="cab-id" placeholder="Enter Cab Id" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="">&nbsp;</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="submit" value="ADD" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}

export default Add_Driver;