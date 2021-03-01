import React from 'react';
import { Link } from 'react-router-dom';

class HabitBox extends React.Component {
  render() {
    // debugger
    return (
        <div>
            <ul>
              <li><h2>{this.props.title}</h2></li>
              {/* style this so that "indent" is indented */}
              <li><p id="indent">{this.props.description}
                <Link className="edit-link" to={`/habits/${this.props.id}/update`}>Edit</Link>
              </p></li>
            </ul>
        </div>
    );
  }
}

export default HabitBox;