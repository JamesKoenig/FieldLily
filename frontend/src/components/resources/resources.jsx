import React from 'react';
import Resource from '../../../../models/Resource';

class Resources extends React.Component {
  componentDidMount() {
    this.props.fetchResources();
  }
  render() {
    //todo: map through this.props.resources & render them
    return (

      <div>
        <ul>  
          {this.props.resources.map((resource) => (
              <ResourceIndexItem
                resource={resource}
                key={resource.id}
              />
          ))}
        </ul>
      </div>
    )
  }
}

export default Resources;
