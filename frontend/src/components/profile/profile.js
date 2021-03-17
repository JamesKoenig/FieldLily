import React from 'react';
import HabitBox from '../habits/habit_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchCurrentUserHabits();
    }

    componentWillReceiveProps(newState) {
        this.setState({ habits: newState.habits });
    }   
    
    render() {
        if (this.state.habits.length === 0) {
          return (<div>This user has no Habits</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Habits</h2>
              {this.state.habits.map(habit => (
                <HabitBox key={habit._id} {...habit} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;
