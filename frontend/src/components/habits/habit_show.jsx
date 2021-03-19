import React from 'react';
import { Link } from 'react-router-dom';
import ResourceIndexItem from '../resources/resource_index_item';


class HabitShow extends React.Component {
  componentDidMount() {
    this.props.fetchHabits();
    this.props.fetchResources();
  }

  render() {
    const { habit, resources } = this.props;
    //debugger
    if(!habit)
      return null;
    if(!resources) {
      resources = []
    }
    return (
      <div>
         <div>
            <h1>Title: {habit.title}</h1>
            <p>Description: {habit.description}</p>
            <h2>Resources:</h2>
            <ul>
                {resources.map((resource) => (
                    <ResourceIndexItem
                        resource={resource}
                        key={resource._id}
                    />
                ))}
            </ul>
        </div>
        <Link to="/" />
      </div>
    );
  }
}

export default HabitShow;

