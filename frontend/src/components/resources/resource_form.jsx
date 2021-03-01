import React from 'react';
import { Link } from 'react-router-dom';


class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.resource

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createResource(this.state, this.props.habitId)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() { 
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                
                <label>
                    Title
                    <textarea
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>

                <button type='submit' value={this.props.formType} textarea='add Resource'/>
                </form>
                <Link className="primary" to="/habits">All habits</Link>

            </div>
        )
  }
    
}
 
export default ResourceForm