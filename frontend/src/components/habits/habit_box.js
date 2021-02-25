import React from 'react';

class HabitBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.text}</h3>
        </div>
    );
  }
}

export default HabitBox;