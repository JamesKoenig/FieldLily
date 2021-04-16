import React from 'react';
import ResourceIndexItem from './resource_index_item';
import '../common-stylings/entity-index.css';


class Resources extends React.Component {
  componentDidMount() {
    this.props.fetchResources();
  }
  render() {
    const {
      resources,
    } = this.props;
    return (
      <div className="entity-index-container">
        <div className="entity-index">
          <h1 className="entity-index-heading">All resources</h1>
           <ul className="entity-index-list">
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
