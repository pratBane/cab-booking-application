import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

class Display_Customer extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section class="section-dashboard">

                    <div class="row">
                        <div class="card">
                            <h2>Customer Details</h2>
                            <Link to="/add_customer" class="btn">Add Customer</Link>
                            <div class="container">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sr no</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th colspan="2">Address</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>JohnDoe</td>
                                            <td>1234</td>
                                            <td colspan="2">Malad Mumbai-400095</td>
                                            <td>johndoe@gmail.com</td>
                                            <td>9887698775</td>
                                            <td><Link to="/edit_customer"><i class="ion-edit icon-small"></i></Link> <a href="#"><i
                                                class="ion-android-delete icon-small"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>JohnDoe</td>
                                            <td>1234</td>
                                            <td colspan="2">Malad Mumbai-400095</td>
                                            <td>johndoe@gmail.com</td>
                                            <td>9887698775</td>
                                            <td><Link to="/edit_customer"><i class="ion-edit icon-small"></i></Link> <a href="#"><i
                                                class="ion-android-delete icon-small"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>JohnDoe</td>
                                            <td>1234</td>
                                            <td colspan="2">Malad Mumbai-400095</td>
                                            <td>johndoe@gmail.com</td>
                                            <td>9887698775</td>
                                            <td><Link to="/edit_customer"><i class="ion-edit icon-small"></i></Link> <a href="#"><i
                                                class="ion-android-delete icon-small"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>JohnDoe</td>
                                            <td>1234</td>
                                            <td colspan="2">Malad Mumbai-400095</td>
                                            <td>johndoe@gmail.com</td>
                                            <td>9887698775</td>
                                            <td><Link to="/edit_customer"><i class="ion-edit icon-small"></i></Link> <a href="#"><i
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

export default Display_Customer;