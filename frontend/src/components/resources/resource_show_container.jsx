import { connect } from 'react-redux';
import ResourceShow from './resource_show';
import { fetchResource } from '../../actions/resource_actions';
import { fetchHabits } from '../../actions/habit_actions';


const mapStateToProps = ({entities: { resources: { all: resources },
                                      habits: { all: habits } } },
                         {match: {params: { resourceId } } }) => {
  let resource = resources[resourceId];
  return {
    resourceId,
    resource,
    habit: resource ? habits[resource.habit] : undefined,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchResource: resourceId => dispatch(fetchResource(resourceId)),
  fetchHabits: () => dispatch(fetchHabits()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceShow);
