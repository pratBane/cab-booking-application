import './App.css';
import Intro_Page from './pages/Intro_Page';
import Login_Admin from './pages/Login_Admin';
import Login_Customer from './pages/Login_Customer';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Available_Ride from './pages/Available_Ride';
import Book_Ride from './pages/Book_Ride';
import Home from './pages/Home';
import Display_Customer from './pages/Display_Customer';
import Add_Customer from './pages/Add_Customer';
import Edit_Customer from './pages/Edit_Customer';
import Display_Cab from './pages/Display_Cab';
import Add_Cab from './pages/Add_Cab';
import Edit_Cab from './pages/Edit_Cab';
import Display_Driver from './pages/Display_Driver';
import Add_Driver from './pages/Add_Driver';
import Edit_Driver from './pages/Edit_Driver';
import Display_TripBooking from './pages/Display_TripBooking';
import Add_TripBooking from './pages/Add_TripBooking';
import Edit_TripBooking from './pages/Edit_TripBooking';
import Profile from './pages/Profile';
import Change_Password from './pages/Change_Password';
import Logout from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Intro_Page}/>
          <Route path='/login_admin' component={Login_Admin}/>
          <Route path='/login_customer' component={Login_Customer}/>
          <Route path='/register' component={Register}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/available_ride' component={Available_Ride}/>
          <Route path='/book_ride' component={Book_Ride}/>
          <Route path='/home' component={Home}/>
          <Route path='/display_customer' component={Display_Customer}/>
          <Route path='/add_customer' component={Add_Customer}/>
          <Route path='/edit_customer' component={Edit_Customer}/>
          <Route path='/display_cab' component={Display_Cab}/>
          <Route path='/add_cab' component={Add_Cab}/>
          <Route path='/edit_cab' component={Edit_Cab}/>
          <Route path='/display_driver' component={Display_Driver}/>
          <Route path='/add_driver' component={Add_Driver}/>
          <Route path='/edit_driver' component={Edit_Driver}/>
          <Route path='/display_tripbooking' component={Display_TripBooking}/>
          <Route path='/add_tripbooking' component={Add_TripBooking}/>
          <Route path='/edit_tripbooking' component={Edit_TripBooking}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/change_password' component={Change_Password}/>
          <Route path='/logout' component={Logout}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
