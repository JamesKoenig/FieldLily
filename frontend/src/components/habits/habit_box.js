import React from 'react';
import { Link } from 'react-router-dom';

import './habit_box.css';

class HabitBox extends React.Component {
  render() {
    const { loggedIn, title, description, _id } = this.props;
    return (
        <li>
            <ul className="habit-index-box">
              <li><h2><Link to={`/habits/${_id}`}>{title}</Link></h2></li>
              {/* style this so that "indent" is indented */}
              <li><p id="indent">Description: {description}
                { loggedIn ?
                  (<Link className="edit-link" to={`/habits/${_id}/update`}>
                     Edit
                   </Link>) : null }
              </p></li>
            </ul>
        </li>
    );
  }
}

export default HabitBox;
