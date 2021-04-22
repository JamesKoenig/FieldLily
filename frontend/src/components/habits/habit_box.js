import React from 'react';
import { Link } from 'react-router-dom';

import '../common-stylings/entity-index-item.css';

class HabitBox extends React.Component {
  render() {
    const { title, description, _id, setSelfAsActive } = this.props;

    const handleClick = (e) => {
      e.stopPropagation();
      setSelfAsActive();
    }

    return (
        <li id={_id}
            onClick={handleClick}>
            <ul className="entity-index-box">
              <li><h2><Link to={`/habits/${_id}`}>{title}</Link></h2></li>
              {/* style this so that "indent" is indented */}
              <li>
                <p style={{marginLeft: "20px"}}>
                {description}
                </p>
             </li>
            </ul>
        </li>
    );
  }
}

export default HabitBox;
