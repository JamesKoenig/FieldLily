import React from 'react';
import { Link } from 'react-router-dom';

import '../common-stylings/entity-index-item.css';

import activeStyles from './habit_box_style';

const HabitBox = props => {
  const {
    title,
    description,
    _id,
    isActive,
  } = props;

  const handleClick = e => {
    e.stopPropagation();
  }

    return (
      <li style={activeStyles[isActive]}
          id={_id}
          onClick={handleClick}>
          <Link style={{textDecoration: "none" }} to={`/habits/${_id}`}>
            <ul className="entity-index-box">
              <li><h2>{title}</h2></li>
              {/* style this so that "indent" is indented */}
              <li>
                <p style={{marginLeft: "20px"}}>
                {description}
                </p>
             </li>
            </ul>
          </Link>
      </li>
  );
}

export default HabitBox;
