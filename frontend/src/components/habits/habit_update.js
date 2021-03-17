import React from 'react';

class HabitUpdate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: "",
          description: "",
          updateHabit: ""
      }
      this.handleChangeTitle = this.handleChangeTitle.bind(this)
      this.handleChangeDescription = this.handleChangeDescription.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({updateHabit: nextProps.updateHabit.text});
  }


  handleChangeTitle(e) {
    let habit = {
        title: this.state.title,
        description: this.state.description
      };    
    let modifiedTitle = e.target.value
    habit.title = modifiedTitle
    this.setState({ habit: habit })
  }

  handleChangeDescription(e) {
    let habit = {
        title: this.state.title,
        description: this.state.description
      }; 
    let modifiedDescription = e.target.value
    habit.description = modifiedDescription
    this.setState({ habit: habit })
  }

  handleSubmit(e) {
    e.preventDefault();
    let habit = {
      title: this.state.title,
      description: this.state.description
    };

    this.props.updateHabit(habit); 
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
                        placeholder={this.state.title}
                    />
                    <input type="textarea"
                        value={this.state.description}
                        onChange={this.update("description")}
                        placeholder={this.state.description}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
        </div>
    )
  }
}

export default HabitUpdate;
