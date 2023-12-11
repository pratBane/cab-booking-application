import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


class Display_TripBooking extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section class="section-dashboard">

                    <div class="row">
                        <div class="card">
                            <h2>TripBooking Details</h2>
                            <Link to="/add_tripbooking" class="btn">Add TripBooking</Link>
                            <div class="container">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sr no</th>
                                            <th>Total Bill</th>
                                            <th>Distance In Km</th>
                                            <th>From Date Time</th>
                                            <th>From Location</th>
                                            <th>To Date Time</th>
                                            <th>To Location</th>
                                            <th>Status</th>
                                            <th>Customer Id</th>
                                            <th>Driver Id</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>500</td>
                                            <td>50</td>
                                            <td>2021-10-05 11:44:44</td>
                                            <td>Malad</td>
                                            <td>2021-10-05 13:44:44</td>
                                            <td>Andheri</td>
                                            <td>Completed</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td><Link to="/edit_tripbooking"><i class="ion-edit icon-small"></i></Link> <a href="#"><i
                                                class="ion-android-delete icon-small"></i></a></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div >
                        </div >
                    </div >
                </section >
                <Footer />

            </div >
        )
    }
}

export default Display_TripBooking;