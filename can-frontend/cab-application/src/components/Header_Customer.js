import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header_Customer extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul class="main-nav">
                            <li><Link to="/dashboard"><i class="ion-android-home icon-big"></i>Home</Link></li>
                            <li><Link to="/available_ride"><i class="fa fa-car icon-big" aria-hidden="true"></i>Book A Ride</Link></li>
                            <li><a href="/dashboard#about-us"><i class="fa fa-info-circle icon-big" aria-hidden="true"></i>About Us</a></li>
                            <li><a href="/dashboard#contact-us"><i class="fa fa-envelope icon-big" aria-hidden="true"></i>Contact Us</a></li>
                            {/* <li><Link to="/profile"><i class="fa fa-user icon-big" aria-hidden="true"></i>Profile</Link></li> */}
                            <li><Link to="/"><i class="ion-log-out icon-big"></i>Logout</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header_Customer;
