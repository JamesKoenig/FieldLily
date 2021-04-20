import React from 'react';

class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heading: "" };
        if(this.props.resource) {
          this.state.heading = "Edit your resource";
          this.props.receiveNewResource(this.props.resource);
        } else {
          this.state.heading = "Create new resource";
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        throw "CREATING NEW RESOURCES NOT YET IMPLEMENTED, SORRY";
        //this.props.createResource(this.props.resource, this.props.habitId)
    }

    update(field) {
      const {
        title,
        description,
        receiveNewResource,
      } = this.props;
        return e => {
          receiveNewResource({
            title,
            description,
            [field]: e.currentTarget.value,
          });
        }
    }

    render() {
      const {
        title,
        description,
      } = this.props;
      const { heading } = this.state;
        return (
            <div className="form">
                <h3>{heading}</h3>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={this.update('title')} />
                  <label>
                    Description
                  </label>
                  <textarea className="text"
                    value={description}
                    onChange={this.update('description')} />
                  <button>
                    Add Resource
                  </button>
                </form>
            </div>
        )
  }
}

export default ResourceForm
