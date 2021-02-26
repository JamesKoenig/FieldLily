
import React from 'react';
import { Link } from 'react-router-dom'
import Modal from '../modal/modal_container';
import './navbar.css';

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
    const { openModal, loggedIn } = this.props;
      if (loggedIn) {
        return [
          <Link key="habits"  to={'/habits'}>All Habits</Link>,
          <Link key="profile" to={'/profile'}>Profile</Link>,
          <button key="logout" onClick={this.logoutUser}>Logout</button>,
        ];
      } else {
        return [
          <button key="login" 
                  onClick={ () => openModal('login') }> 
            Login
          </button>,
          <button key="signup" 
                  onClick={ () => openModal('signup') }> 
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
               { [<div></div>,...this.getLinks()] }
             </div>
          </div>
          <Modal />
        </div>
      );
  }
}

export default NavBar;
