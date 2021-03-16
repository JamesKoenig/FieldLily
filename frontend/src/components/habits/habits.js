import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitBox from './habit_box';
import HabitCompose from './habit_compose_container'

import "./habits.css"

class Habit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchHabits();
  }

  render() {
    const { habits, loggedIn } = this.props;
    if (!habits || habits.length < 1) {
      return (
      <div className="habits-index-container">
        <div className="habits-index">
          <h1 className="habits-index-heading">There are no Habits</h1>
          {loggedIn ? (<HabitCompose />) : null }
        </div>
        <div></div>
      </div>)
    } else {
      return (
        <div className="habits-index-container">
          <div className="habits-index">
            <h1 className="habits-index-heading">All Habits</h1>
            { habits.map(habit => (
              <HabitBox key={habit._id} {...habit} loggedIn={loggedIn} />
            ))}
            { loggedIn ?  (<HabitCompose />) : null }
          </div>
          <div></div>
        </div>
      );
    }
  }
}

export default withRouter(Habit);
