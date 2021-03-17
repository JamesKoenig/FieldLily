import React from 'react';
import Resources from '../resources/resources_container';
import './main.css'

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page">
        <h1>Field Lily</h1>
        <Resources />
      </div>
    );
  }
}

export default MainPage;
