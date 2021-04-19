import React from 'react';

class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heading: "" };
        if(this.props.editResource) {
          this.state.heading = "Edit your resource";
          this.props.receiveNewResource(this.props.editResource);
        } else {
          this.state.heading = "Create new resource";
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        const {
          createResource,
          newResource,
        } = this.props;
        e.preventDefault();
        createResource(newResource)
    }

    update(field) {
      const {
        newResource: {
          title,
          description,
        },
        receiveNewResource,
        habitId,
      } = this.props;

        return e => {
          receiveNewResource({
            title,
            description,
            habitId,
            [field]: e.currentTarget.value,
          });
        }
    }

    render() {
      const { newResource: {
        title,
        description,
      }} = this.props;
      const { heading } = this.state;
        return (
            <div>
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
                  <textarea
                    value={description}
                    onChange={this.update('description')} />
                  <button>
                    add Resource
                  </button>
                </form>
            </div>
        )
  }
}

export default ResourceForm
