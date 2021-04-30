import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom'
import './navbar.css';

const CondLink = ({ path, label }) => (
  <Route
    render={ ( { location } ) => (location.pathname !== path) ?
        (
          <Link to={path}>
            <button>
              {label}
            </button>
          </Link>
        ) : null }
   />
)

const arrToCondLinks = arr =>
  arr.map( ([path,label]) => {
    return (<CondLink key={path} {...{path,label}} />);
  });

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    const {
      loggedIn,
      openLoginModal,
      openSignupModal,
    } = this.props;

      if (loggedIn) {
        return [
          ...arrToCondLinks([
            ["/","Home"],
            ["/habits", "All Habits"],
            ["/profile", "Profile"],
            ["/resources", "All Resources"],
            ]),
          <button key="logout" onClick={this.logoutUser}>Logout</button>,
        ];
      } else {
        return [
          ...arrToCondLinks([
            ["/","Home"],
            ["/habits","All Habits"],
            ["/resources", "All Resources"],
          ]),
          <button key="login"
                  onClick={ () => openLoginModal() }>
            Login
          </button>,
          <button key="signup"
                  onClick={ () => openSignupModal() }>
            Sign Up
          </button>,
        ];
      }
  }

  render() {
      return (
        <div className="navbar-flex-container">
          <div className="navbar">
            <h1 className="navbar-logo">FieldLily</h1>
             <div className="navbar-links">
               { [<div key="make_room"></div>,...this.getLinks()] }
             </div>
          </div>
        </div>
      );
  }
}

export default NavBar;
