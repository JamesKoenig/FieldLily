import React from 'react';
import HabitShow from './habit_show_container';

import './habit_show.css';

const HabitShowPage = props => (
  <div className="habit-show-container">
        <HabitShow {...props}/>
  </div>
)

export default HabitShowPage;
