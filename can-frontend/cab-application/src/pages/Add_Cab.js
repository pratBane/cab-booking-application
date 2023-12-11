import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class Add_Cab extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section class="section-dashboard">
                    <div class="card">
                        <div class="row">
                            <h2>Add New Cab</h2>
                        </div>
                        <div class="row">
                            <form action="" class="contact-form">
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="name">Car Type</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <select name="car-type" id="car-type" required>
                                            <option value="prime">Prime</option>
                                            <option value="premium">Premium</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label for="find-us">Per KM Rate</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input type="text" name="rate" id="rate" placeholder="Enter per km rate" required />
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

export default Add_Cab;