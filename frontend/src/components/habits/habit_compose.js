import React from 'react';
import HabitBox from './habit_box';

class HabitCompose extends React.Component {
  constructor(props) {
      super(props);
      if(this.props.habit) {
        this.props.receiveNewHabit(this.props.habit);
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if(this.props.habit) {
      //delete the 'draft' if we were editing
      this.props.receiveNewHabit({title: "", description: ""});
    }

  }

  handleSubmit(e) {
    const { title,
      description,
      composeHabit,
      updateHabit,
      modalFadeAndClose,
      habit,
    } = this.props;

    const newHabit = {
      title,
      description,
    };

    e.preventDefault();
    if(this.props.habit) {
      updateHabit(habit._id, newHabit);
    } else {
      composeHabit(newHabit);
    }
    modalFadeAndClose();
  }

  update(key) {
    const {
      title,
      description,
      receiveNewHabit,
    } = this.props;

    return e => {
      return receiveNewHabit({
        title,
        description,
        [key]: e.currentTarget.value,
    });
    }
  }

  render() {
    const { title, description } = this.props;
    return (
        <div className="form">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={title}
                        onChange={this.update("title")}
                        placeholder="Habit title"
                    />
                    <input type="textarea"
                        value={description}
                        onChange={this.update("description")}
                        placeholder="Habit description"
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
  }
}

export default HabitCompose;
