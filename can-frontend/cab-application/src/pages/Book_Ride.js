import React, { Component } from 'react';
import Header_Customer from '../components/Header_Customer';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


class Book_Ride extends React.Component {
    render() {
        return (
            <div>
                <Header_Customer />
                <section class="section-dashboard">
                    <div class="card">
                        <div class="row">
                            <h2>Book A Trip</h2>
                        </div>
                        <div class="row">
                            <form action="" class="contact-form">


                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Enter Current Location:</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="from-location" id="from-location" placeholder="Current Location" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Enter Desire Location</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="to-location" id="to-location" placeholder="Desire Location" required />
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Enter Departure Date</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="datetime-local" name="from-time" id="from-time" placeholder="Enter From Date and Time " required />
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Enter Arrival Date</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="datetime-local" name="to-time" id="to-time" placeholder="Enter To Date and Time " required />
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Enter Trip Status</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="status" id="status" placeholder="Enter your status" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Enter Customer ID</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="customer_id" id="customer_id" placeholder="Enter Customer Id" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Enter Driver ID</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="driver_id" id="driver_id" placeholder="Enter Driver Id" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="name">Enter Total Distance</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="distance" id="distance" placeholder="Enter Total Distance" required />
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

                <section class="section-form" id="contact-us">
                    <div class="row">
                        <h2>We're happy to hear you</h2>
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
                                    <input type="email" name="email" id="email" placeholder="Your Name" required />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col span-1-of-3">
                                    <label for="find-us">How did you find us?</label>
                                </div>
                                <div class="col span-2-of-3">
                                    <select name="find-us" id="find-us">
                                        <option value="friend">Friend</option>
                                        <option value="search">Search Engine</option>
                                        <option value="ads">Advertiesment</option>
                                        <option value="other">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col span-1-of-3">
                                    <label for="news">Newsletter</label>
                                </div>
                                <div class="col span-2-of-3">
                                    <input type="checkbox" name="news" id="news" checked /> Yes,
                                    Please
                                </div>
                            </div>

                            <div class="row">
                                <div class="col span-1-of-3">
                                    <label for="news">Drop us a line</label>
                                </div>
                                <div class="col span-2-of-3">
                                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col span-1-of-3">
                                    <label for="">&nbsp;</label>
                                </div>
                                <div class="col span-2-of-3">
                                    <input type="submit" value="Send it!" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Book_Ride;