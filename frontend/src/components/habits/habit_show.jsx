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
    if(!habit)
      return null;
    return (
      <div>
         <div>
            <h1>{habit.title}</h1>
            <p>{habit.description}</p>
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

