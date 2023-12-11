import React, { Component } from 'react';
import Header_Customer from '../components/Header_Customer';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Header_Customer />
                <section class="section-home" id="home">
                    <div class="hero-text-box">
                        <h1>Find the best rental car</h1>
                        <div class="head-link">
                            <Link to="/available_ride" class="home-btn btn">Book Now</Link>
                        </div>
                    </div>
                </section>
                <section class="section-form" id="about-us">
                    <div class="col span-1-of-2 steps-box">
                        <h2 id="about-us-h2">About Us</h2>
                        <p class="about-us-p">We are here to help you make your life more easy by hapling you commute from one place to another without any issue.
                            We provide full support. You can easily book a ride to travel. Our aim is to make larger comunity to help achieve our dream by booking a ride.
                        </p>
                    </div>
                    <div class="col span-1-of-2 steps-box">
                        <img src="assets/resources/img/about-us.png" alt="" class="about-us-img" />
                    </div>
                </section>

                <section class="section-form" id="contact-us">
                    <div class="row">
                        <h2>We're happy to hear you</h2>
                    </div>
                    <div class="row">
                        <form action="" class="contact-form1">
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

export default Dashboard;