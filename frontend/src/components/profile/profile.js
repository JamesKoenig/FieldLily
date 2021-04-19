import React from 'react';
import HabitBox from '../habits/habit_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCurrentUserHabits();
    }

    render() {
        if (this.state.habits.length === 0) {
          return (<div>This user has no Habits</div>)
        } else {
          return (
            <div>
              <h2>{"All of This User's Habits"}</h2>
              {this.props.habits.map(habit => (
                <HabitBox key={habit._id} {...habit} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;
