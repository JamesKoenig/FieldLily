import React from 'react';

class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.resource) {
          this.props.receiveNewResource(this.props.resource);
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
            [field]: e.currentTarget.value
          });
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>

                  <label>
                      Title
                  </label>
                  <textarea
                    value={this.props.title}
                    onChange={this.update('title')} />

                  <button>
                    add Resource
                  </button>
                </form>
            </div>
        )
  }
}

export default ResourceForm
