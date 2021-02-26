import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitBox from './habit_box';

class Habit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      habits: []
    }
  }

  componentWillMount() {
    this.props.fetchHabits();
  }

  componentWillReceiveProps(newState) {
    this.setState({ habits: newState.habits });
  }

  render() {
    if (this.state.habits.length === 0) {
      return (<div>There are no Habits</div>)
    } else {
      return (
        <div>
          <h2>All Habits</h2>
          {this.state.habits.map(habit => (
            <HabitBox key={habit._id} text={habits.text} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Habit);