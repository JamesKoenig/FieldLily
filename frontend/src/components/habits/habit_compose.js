import React from 'react';
import HabitBox from './habit_box';

class HabitCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
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
      text: this.state.text
    };

    this.props.composeTweet(habit); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="Add your habit :)"
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