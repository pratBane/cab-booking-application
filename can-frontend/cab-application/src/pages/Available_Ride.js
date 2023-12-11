import React, { Component } from 'react';
import Header_Customer from '../components/Header_Customer';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


class Available_Ride extends React.Component {
    render() {
        return (
            <div>
                <Header_Customer />
                <section class="section-dashboard">

                    <div class="row">
                        <div class="card">
                            <h2>Available Ride</h2>
                            <div class="container">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sr no</th>
                                            <th>Cab ID</th>
                                            <th>Cab Type</th>
                                            <th>Cab Rate</th>
                                            <th>Driver ID</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>Prime</td>
                                            <td>12</td>
                                            <td>1</td>
                                            <td><Link to="/book_ride" class="book-btn">BOOK<i class="ion-arrow-right-c icon-small"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>Prime</td>
                                            <td>12</td>
                                            <td>1</td>
                                            <td><Link to="/book_ride" class="book-btn">BOOK<i class="ion-arrow-right-c icon-small"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>Prime</td>
                                            <td>12</td>
                                            <td>1</td>
                                            <td><Link to="/book_ride" class="book-btn">BOOK<i class="ion-arrow-right-c icon-small"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>1</td>
                                            <td>Prime</td>
                                            <td>12</td>
                                            <td>1</td>
                                            <td><Link to="/book_ride" class="book-btn">BOOK<i class="ion-arrow-right-c icon-small"></i></Link></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div >
                        </div >
                    </div >
                </section >

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

export default Available_Ride;