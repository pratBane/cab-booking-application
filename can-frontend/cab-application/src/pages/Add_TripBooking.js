import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class Add_TripBooking extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section class="section-dashboard">
                    <div class="card">
                        <div class="row">
                            <h2>Add New TripBooking</h2>
                        </div>
                        <div class="row">
                            <form action="" class="contact-form">
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="name">Distance In Km</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="number" name="distance" id="distance" placeholder="Enter Distance" required />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">From Location</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="from-location" id="from-location" placeholder="Enter From Location" required />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">From Date Time</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="from-time" id="from-time" placeholder="Enter From Date and Time " required />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">To Location</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="to-location" id="to-location" placeholder="Enter To Location" required />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">To Date Time</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="to-time" id="to-time" placeholder="Enter To Date and Time " required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Status</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <select name="status" id="status" required>
                                            <option value="prime">Pending</option>
                                            <option value="premium">Completed</option>
                                            <option value="premium">Cancelled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Cab ID</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="cab_id" id="cab_id" placeholder="Enter Cab Id" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Driver ID</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="driver_id" id="driver_id" placeholder="Enter Driver Id" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Bill</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="bill" id="bill" placeholder="Enter Total Bill"/>
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

export default Add_TripBooking;