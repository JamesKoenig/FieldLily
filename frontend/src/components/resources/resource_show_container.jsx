import { connect } from 'react-redux';
import ResourceShow from './resource_show';
import { fetchResource } from '../../actions/resource_actions';


const mapStateToProps = ({entities: { resources, habits } },
                         {match: {params: { resourceId } } }) => {
  let resource = resources[resourceId]                           
  return {                         
    resource: resource,
    habit: habits[resource.habit]
  }
};

const mapDispatchToProps = dispatch => ({
  fetchResource: resourceId => dispatch(fetchResource(resourceId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceShow)
