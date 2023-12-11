import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul class="main-nav">
                            <li><Link to="/home"><i class="ion-android-home icon-big"></i>Dashboard</Link></li>
                            <li><Link to="/display_customer"><i class="ion-android-person icon-big"></i>Customer</Link></li>
                            <li><Link to="/display_cab"><i class="ion-android-car icon-big"></i>Cab</Link></li>
                            <li><Link to="/display_driver"><i class="ion-person icon-big"></i>Driver</Link></li>
                            <li><Link to="/display_tripbooking"><i class="ion-earth icon-big"></i>TripBooking</Link></li>
                            <li><Link to="/profile"><i class="fa fa-user" aria-hidden="true icon-big"></i> Profile</Link></li>
                            <li><Link to="/"><i class="ion-log-out icon-big"></i>Logout  </Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header;
