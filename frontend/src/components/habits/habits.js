import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitBox from './habit_box';
import HabitCompose from './habit_compose_container'

import './habits.css';

class Habit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchHabits();
  }

  render() {
    const { habits } = this.props;
    if (!habits || habits.length < 1) {
      return (<div className="habit-index">There are no Habits
                  <HabitCompose />
      </div>)
    } else {
      return (
        <div className="habit-index">
          <h1>All Habits</h1>
          { habits.map(habit => (
            <HabitBox key={habit._id} {...habit} />
          ))}
          <HabitCompose />
        </div>
      );
    }
  }
}

export default withRouter(Habit);
