import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';


const ResourceIndexItem = ({ resource: { _id, title, description} }) => (
  <ListGroupItem className="resource-item">
    <div className="resource-desc-box">
        <Link to={`/resources/${_id}`}>{title}</Link>
        <p className="resource-desc">{description}</p>
    </div>
  </ListGroupItem>
);

export default ResourceIndexItem;
