import React from 'react';
import { Link } from 'react-router-dom';
import ResourceIndexItem from '../resources/resource_index_item';
import ListGroup from 'react-bootstrap/ListGroup';

import './habit_show.css';

class HabitShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    const {
      fetchHabit,
      fetchHabitResources,
      match: { params: { habitId }},
    } = this.props;
    fetchHabit(habitId);
    fetchHabitResources(habitId);
  }

  componentWillUnmount(){
    this.props.receiveHabitErrors({})
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

  render() {
    const {
      habit,
      currentUser,
      resources,
      openNewResourceModal,
      openConfirmHabitDeleteModal,
      openEditHabitModal,
    } = this.props;
    if(!habit)
      return null;
    const habitId = habit._id;
    return (
      <div className="habit-show-container">
        <div className="habit-show-grid">
          <div className="habit-show-body">
            <h1>{habit.title}</h1>
            {currentUser && currentUser.id === habit.user ? (
            <div>
                <button className="habit-delete"
                        onClick={() => openConfirmHabitDeleteModal(habitId)} >
                  delete habit
                </button>
                <button className="resources-index-new-button"
                        onClick={() => openNewResourceModal(habitId)}>
                  New Resource
                </button>
                <button className="edit-link"
                        onClick={() => openEditHabitModal(habitId) } >
                  Edit
                </button>
            </div>
            ) : null}
            <p>{habit.description}</p>
          </div>
          <div className="resource-component-div">
             <section>
                <h4 className="resource-title">Resources</h4>
                <ListGroup variant="flush">
                {resources.map((resource) => (
                    <ResourceIndexItem
                        resource={resource}
                        key={resource._id}
                    />
                ))}
                </ListGroup>
            </section>
          </div>
          {this.renderErrors()}
          <Link to="/" />
        </div>
      </div>
    );
  }
}

export default HabitShow;

