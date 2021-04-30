import React from 'react';
import { Link } from 'react-router-dom';

import '../common-stylings/entity-index-item.css';

import activeStyles from './habit_box_style';

class HabitBox extends React.Component {
  render() {
    const {
      title,
      description,
      _id,
      isActive,
      setSelfAsActive,
    } = this.props;

    const handleClick = (e) => {
      e.stopPropagation();
      setSelfAsActive();
    }

      return (
        <li style={activeStyles[isActive]}
            id={_id}
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
