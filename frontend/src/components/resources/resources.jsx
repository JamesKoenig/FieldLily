import React from 'react';
import ResourceIndexItem from './resource_index_item';

class Resources extends React.Component {
  componentDidMount() {
    this.props.fetchResources();
  }
  render() {
    const { resources } = this.props;
    //todo: map through this.props.resources & render them
    return (
      <div>
        <ul>
          {resources.map((resource) => (
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
