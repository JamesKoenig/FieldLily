import React from 'react';
import { Link } from 'react-router-dom';
import ResourceIndexItem from '../resources/resource_index_item';
import ListGroup from 'react-bootstrap/ListGroup';
import NotFoundPage from '../error-pages/not_found_page'
import HabitLikeButton from './habit_like_button_container';

import './habit_show.css';

class HabitShow extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidUpdate({match: {params: {habitId: oldHabitId }}}) {
    const {
      fetchHabit,
      fetchHabitResources,
      match: { params: { habitId }},
    } = this.props;
    if(habitId !== oldHabitId) {
      fetchHabit(habitId);
      fetchHabitResources(habitId);
    }
  }

  render() {
    const {
      habit,
      totalLikes,
      currentUser,
      resources,
      openNewResourceModal,
      openConfirmHabitDeleteModal,
      openEditHabitModal,
    } = this.props;
    if(!habit)
      return <NotFoundPage/>;
    const habitId = habit._id;
    return (
      <div className="habit-show-grid"
           onClick={ e => e.stopPropagation() }>
        <div className="habit-show-body">
          <h1>{habit.title}</h1>
          <div>
          {currentUser && currentUser.id === habit.user ? (
            <>
              <button className="habit-delete"
                      onClick={() => openConfirmHabitDeleteModal(habitId)} >
                Delete Habit
              </button>
              <button className="resources-index-new-button"
                      onClick={() => openNewResourceModal(habitId)}>
                New Resource
              </button>
              <button className="edit-link"
                      onClick={() => openEditHabitModal(habitId) } >
                Edit
              </button>
            </>
          ) : null}
          { currentUser.id ? (<HabitLikeButton habitId={habit._id} />) : null }
          </div>
          <p>liked {totalLikes} time{ totalLikes != 1 ? "s" : null }</p>
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
        <Link to="/" />
      </div>
    );
  }
}

export default HabitShow;

