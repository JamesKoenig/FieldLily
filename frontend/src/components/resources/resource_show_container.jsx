import { connect } from 'react-redux';
import ResourceShow from './resource_show';
import { fetchResource } from '../../actions/resource_actions';


const mapStateToProps = (state, ownProps) => ({
  resource: state.resources[ownProps.match.params.resourceId]
});

const mapDispatchToProps = dispatch => ({
  fetchResource: resourceId => dispatch(fetchResource(resourceId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceShow)