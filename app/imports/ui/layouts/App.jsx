import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import SpayAndNeuter from '../pages/SpayAndNeuter';
import SnatchACat from '../pages/SnatchACat';
import CatSnap from '../pages/CatSnap';
import Donations from '../pages/Donations';
import Volunteers from '../pages/Volunteers';
import NavBar from '../components/NavBar';
import AdoptForm from '../pages/AdoptForm';
import VolunteerForm from '../pages/VolunteerForm';
import EditForm from '../pages/EditForm';
import VolunteerEditForm from '../pages/VolunteerEditForm';
import AdoptRequests from '../pages/AdoptRequests';
import VolunteerRoster from '../pages/VolunteerRoster';
import AddSnatch from '../pages/AddSnatch';
import AddSnap from '../pages/AddSnap';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <div>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signout" component={Signout}/>
            <ProtectedRoute path="/snatchacat" component={SnatchACat}/>
            <ProtectedRoute path="/spayandneuter" component={SpayAndNeuter}/>
            <ProtectedRoute path="/catsnap" component={CatSnap}/>
            <ProtectedRoute path="/donations" component={Donations}/>
            <ProtectedRoute path="/volunteers" component={Volunteers}/>
            <ProtectedRoute path="/adoptform" component={AdoptForm}/>
            <ProtectedRoute path="/volunteerform" component={VolunteerForm}/>
            <ProtectedRoute path="/volunteerroster" component={VolunteerRoster}/>
            <ProtectedRoute path="/addsnatch" component={AddSnatch}/>
            <ProtectedRoute path="/addsnap" component={AddSnap}/>
            <AdminProtectedRoute path="/adoptrequests" component={AdoptRequests}/>
            <AdminProtectedRoute path="/edit/:_id" component={EditForm}/>
            <AdminProtectedRoute path="/volunteer/edit/:_id" component={VolunteerEditForm}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
