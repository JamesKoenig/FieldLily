import React from 'react';
import { Link } from 'react-router-dom';

class HabitBox extends React.Component {
  render() {
    return (
        <div>
            <ul>
              <li><h2>{this.props.title}</h2></li>
              {/* style this so that indent is indented */}
              <li><p id="indent">{this.props.description}
                  <Link className=""
              </p></li>
            </ul>
        </div>
    );
  }
}

export default HabitBox;