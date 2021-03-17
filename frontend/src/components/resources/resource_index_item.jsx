import React from 'react';
import { Link } from 'react-router-dom';


const ResourceIndexItem = props => (
  <li>
    <Link to={`/resources/${props.resource.id}`}>{props.resource.title}</Link>
  </li>
);

export default ResourceIndexItem;
