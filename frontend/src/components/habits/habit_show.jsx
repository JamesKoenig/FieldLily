import React from 'react';
import { Link } from 'react-router-dom';
import ResourceIndexItem from '../resources/resource_index_item';
import ListGroup from 'react-bootstrap/ListGroup';

import './habit_show.css';

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
      <div className="habit-show-container">
        <div className="habit-show-grid">
          <br/>
          <div className="habit-show-body">
            <h1>{habit.title}</h1>
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
      </div>
    );
  }
}

export default HabitShow;

