import React from 'react';
import { Link } from 'react-router-dom';

import './resource_show.css'

class ResourceShow extends React.Component {
  componentDidMount() {
    this.props.fetchResource();
    this.props.fetchHabits();
  }

  render() {
    const { 
      resource,
      habit,
      openEditResourceModal,
      openConfirmResourceDeleteModal,
    } = this.props;
    if(!resource || !habit)
      return null;
    return (
      <div className="resource-show-container">
         <div className="resource-show">
            <h1>{resource.title}</h1>
            <button className="resource-edit"
                    onClick={openEditResourceModal}>
              Edit
            </button>
            <button className="resource-delete"
                    onClick={openConfirmResourceDeleteModal}>
              Delete
            </button>
            <p>{resource.featured}</p>
            <p>{resource.description}</p>
            <Link to={`/habits/${resource.habit}`}>
             <h2> <button>belongs to habit {habit.title}</button> </h2>
            </Link>

        </div>
        <Link to="/" />
      </div>
    );
  }
}

export default ResourceShow;

