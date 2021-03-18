import React from 'react';
import { Link } from 'react-router-dom';


class ResourceShow extends React.Component {
  componentDidMount() {
    const { resourceId } = this.props;
    this.props.fetchResource(resourceId);
    this.props.fetchHabits();
  }

  render() {
    const { resource, habit } = this.props;
    if(!resource || !habit)
      return null;
    return (
      <div>
         <div>
            <h1>{resource.title}</h1>
            <p>{resource.featured}</p>
            <p>{resource.description}</p>
            <p>belongs to habit {habit.title}</p>
        </div>
        <Link to="/" />
      </div>
    );
  }
}

export default ResourceShow;

