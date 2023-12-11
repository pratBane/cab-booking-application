import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';


class Display_Cab extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section class="section-dashboard">

                    <div class="row">
                        <div class="card">
                            <h2>Cab Details</h2>
                            <Link to="/add_cab" class="btn">Add Cab</Link>
                            <div class="container">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sr no</th>
                                            <th>Car Type</th>
                                            <th>Per KM Rate</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Prime</td>
                                            <td>12</td>
                                            <td><Link to="/edit_cab"><i class="ion-edit icon-small"></i></Link> <a href="#"><i
                                                class="ion-android-delete icon-small"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Prime</td>
                                            <td>15</td>
                                            <td><Link to="/edit_cab"><i class="ion-edit icon-small"></i></Link> <a href="#"><i
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

export default Display_Cab;