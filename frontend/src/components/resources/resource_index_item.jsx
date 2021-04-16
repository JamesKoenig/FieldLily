import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

import "../common-stylings/entity-index-item.css";

const ResourceIndexItem = ({ resource: { _id, title, description} }) => (
  <ListGroupItem className="entity-item">
    <div className="entity-index-box">
        <Link to={`/resources/${_id}`}>{title}</Link>
        <p className="entity-desc">{description}</p>
    </div>
  </ListGroupItem>
);

export default ResourceIndexItem;
