import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section class="section-dashboard" id="dashboard">

                    <div class="row">
                        <div class="col span-1-of-4 box">
                            <Link to="/display_customer">
                                <h3>Total Customer</h3>
                                <div class="row">
                                    <div class="col span-1-of-2">
                                        <div class="circle"><i class="ion-android-person icon-large"></i></div>
                                    </div>
                                    <div class="col span-1-of-2">
                                        <p>31</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div class="col span-1-of-4 box">
                            <Link to="/display_cab">
                                <h3>Total Car</h3>
                                <div class="row">
                                    <div class="col span-1-of-2">
                                        <div class="circle"><i class="ion-android-car icon-large"></i></div>
                                    </div>
                                    <div class="col span-1-of-2">
                                        <p>31</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div class="col span-1-of-4 box">
                            <Link to="/display_driver">
                                <h3>Total Driver</h3>
                                <div class="row">
                                    <div class="col span-1-of-2">
                                        <div class="circle"><i class="ion-person icon-large"></i></div>
                                    </div>
                                    <div class="col span-1-of-2">
                                        <p>31</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div class="col span-1-of-4 box">
                            <Link to="/display_tripbooking">
                                <h3>Total Trip</h3>
                                <div class="row">
                                    <div class="col span-1-of-2">
                                        <div class="circle"><i class="ion-earth icon-large"></i></div>
                                    </div>
                                    <div class="col span-1-of-2">
                                        <p>31</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home;