import React from 'react';
import { Link } from 'react-router-dom';


class ResourceShow extends React.Component {
  componentDidMount() {
    this.props.fetchResource(this.props.match.params.resourceId);
  }

  componentDidUpdate() {
    this.props.fetchResource(this.props.match.params.resourceId);
  }

  render() {
    const { resource } = this.props;
  
    //debugger
    return (
      <div>
         <div>
            <h1>{resource.title}</h1>
            <p>{resource.featured}</p>
            <p>{resource.description}</p>
            <p>{resource.habit}</p>
        </div>
        <Link to="/" />
      </div>
    );
  }
}

export default ResourceShow;

