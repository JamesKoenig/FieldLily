import React from 'react';
import { Link } from 'react-router-dom';


const ResourceIndexItem = ({ resource: { _id, title} }) => (
  <li>
    <Link to={`/resources/${_id}`}>{title}</Link>
  </li>
);

export default ResourceIndexItem;
