import React from 'react';

class HabitCompose extends React.Component {
  constructor(props) {
      super(props);
      if(this.props.habit) {
        this.props.receiveNewHabit(this.props.habit);
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    if(this.props.habit) {
      //delete the 'draft' if we were editing
      this.props.receiveNewHabit({title: "", description: ""});
    }
    const errors = this.props.errors;
    if(errors && Object.keys(errors).length > 0) {
      this.props.clearHabitErrors();
    }
  }

  renderErrors() {
    const errors = this.props.errors
    if (!errors || Object.keys(errors).length == 0) {
      return null
    }
    return(
      <ul className="habit-errors">
        {Object.keys(errors).map((error, i) => (
          <li key={`error-${i}`}>
            {errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    const { title,
      description,
      composeHabit,
      updateHabit,
      closeModal,
      habit,
      receiveNewHabit,
    } = this.props;

    const newHabit = {
      title,
      description,
    };
    e.preventDefault();
    const promiseAction = habit ? () => updateHabit(habit._id, newHabit)
                                : () => composeHabit(newHabit);
    promiseAction()
      .then(res => {
        if(res !== "fail") {
          receiveNewHabit({title: "", description: ""});
          closeModal();
        }
      });
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
            {this.renderErrors()}
        </div>
    )
  }
}

export default HabitCompose;
