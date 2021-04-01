import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitBox from './habit_box';
import HabitCompose from './habit_compose_container'


import './habits.css';

class Habit extends React.Component {
  componentDidMount() {
    this.props.fetchHabits();
  }

  render() {
    const {
      habits,
      loggedIn,
      openNewHabitModal,
      openEditHabitModal,
    } = this.props;
    return (
      <div className="habits-index-container">
        <div className="habits-index">
          { (!habits || habits.length < 1)
            ?
              (
                <h1 className="habits-index-heading">
                  No habits to display
                </h1>
              )
            :
              (
                <>
                  <h1 className="habits-index-heading">
                    All Habits
                  </h1>
                  <ul className="habits-index-list">
                    { habits.map(habit => (
                      <HabitBox key={habit._id}
                                loggedIn={loggedIn}
                                openEditHabitModal={openEditHabitModal}
                                {...habit} />
                    ))}
                  </ul>
                </>
              )
          }
          <button onClick={() => openNewHabitModal() } />
        </div>
        <div></div>
      </div>)
  }
}

export default withRouter(Habit);
