import React from 'react';
import ResourceIndexItem from './resource_index_item';
import './resources.css';


class Resources extends React.Component {
  componentDidMount() {
    this.props.fetchResources();
  }
  render() {
    const { resources } = this.props;
    return (
      <div className="resources-index-container">
        <div className="resources-index">
          <h1 className="resources-index-heading">All resources</h1>
            <ul className="resources-index-list">

              {resources.map((resource) => (
                  <ResourceIndexItem
                    resource={resource}
                    key={resource._id}
                  />
              ))}
            </ul>
        </div>
      </div>
    )
  }
}

export default Resources;
