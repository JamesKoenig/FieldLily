import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundPage from '../error-pages/not_found_page'
import './resource_show.css'

class ResourceShow extends React.Component {
  componentDidMount() {
    const { resourceId } = this.props;
    this.props.fetchResource(resourceId);
    this.props.fetchHabits();
  }

  render() {
    const { resource, habit } = this.props;
    if(!resource || !habit)
      return <NotFoundPage />;
    return (
      <div className="resource-show-container">
         <div className="resource-show">
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

