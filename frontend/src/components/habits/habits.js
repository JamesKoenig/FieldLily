import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitBox from './habit_box';

import '../common-stylings/entity-index.css';

class Habit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHabits();
  }

  componentWillUnmount() {
      this.props.clearSearch()
  }

  render() {
    const {
      habits,
      loggedIn,
      openNewHabitModal,
    } = this.props;
    return (
      <div className="entity-index-container">
        <div className="entity-index">
          { (!habits || habits.length < 1)
            ?
              (
                <h1 className="entity-index-heading">
                  No habits to display
                </h1>
              )
            :
              (
                <>
                  <h1 className="entity-index-heading">
                    All Habits
                  </h1>
                  <ul className="entity-index-list">
                    { habits.map(habit => (
                      <HabitBox key={habit._id}
                                {...habit} />
                    ))}
                  </ul>
                </>
              )
          }
          { loggedIn ?
              (<button onClick={() => openNewHabitModal() }>
                 Post a new habit
               </button>)
            : null }
        </div>
        <div></div>
      </div>)
  }
}

export default withRouter(Habit);
