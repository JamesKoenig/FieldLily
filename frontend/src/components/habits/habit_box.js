import React from 'react';
import { Link } from 'react-router-dom';

import './habit_box.css';

class HabitBox extends React.Component {
  render() {
    const { loggedIn, title, description, _id,
            openEditHabitModal } = this.props;
    return (
        <li>
            <ul className="habit-index-box">
              <li><h2><Link to={`/habits/${_id}`}>{title}</Link></h2></li>
              {/* style this so that "indent" is indented */}
              <li><p id="indent">Description: {description}
                { loggedIn ?
                  (<button className="edit-link"
                      onClick={() => openEditHabitModal(_id) } >
                     Edit
                   </button>) : null }
              </p></li>
            </ul>
        </li>
    );
  }
}

export default HabitBox;
