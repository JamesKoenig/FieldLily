import { connect } from 'react-redux'
import ResourceForm from './resource_form'
import { createResource } from '../../actions/resource_actions'

const mapStateToProps = (state) => ({
    resource:{
        title: '',
        description: ''
    },
    formType: 'Add Resource'
})

const mapDispatchToProps = dispatch => ({
    createResource: (resource, habitId) => dispatch(createResource(resource, habitId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceForm)
