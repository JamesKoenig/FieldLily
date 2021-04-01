import React from 'react';
import HabitBox from './habit_box';

class HabitCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: "",
          description: "",
          newHabit: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({newHabit: nextProps.newHabit.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let habit = {
      title: this.state.title,
      description: this.state.description
    };

    this.props.composeHabit(habit); 
    this.setState({title: '',
                   description: ''})
  }

  update(key) {
    return e => this.setState({
      [key]: e.currentTarget.value
    });
  }

  render() {
    return (
        <div className="form">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.title}
                        onChange={this.update("title")}
                        placeholder="Habit title"
                    />
                    <input type="textarea"
                        value={this.state.description}
                        onChange={this.update("description")}
                        placeholder="Habit description"
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <HabitBox text={this.state.newHabit} />
        </div>
    )
  }
}

export default HabitCompose;
