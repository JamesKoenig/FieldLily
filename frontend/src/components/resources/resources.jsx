import React from 'react';
import ResourceIndexItem from './resource_index_item';

class Resources extends React.Component {
  componentDidMount() {
    this.props.fetchResources();
  }
  render() {
    const { resources } = this.props;
    return (
      <div>
        <ul>
          {resources.map((resource) => (
              <ResourceIndexItem
                resource={resource}
                key={resource._id}
              />
          ))}
        </ul>
      </div>
    )
  }
}

export default Resources;
