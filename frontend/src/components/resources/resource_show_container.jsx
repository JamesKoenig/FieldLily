import { connect } from 'react-redux';
import ResourceShow from './resource_show';
import { fetchResource } from '../../actions/resource_actions';
import { fetchHabits } from '../../actions/habit_actions';
import { openEditResourceModal }
  from '../../actions/modal/resource_modal_actions';
import { openConfirmResourceDeleteModal }
  from '../../actions/modal/confirmation_modal_actions';

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
  dispatch,
  fetchHabits: () => dispatch(fetchHabits()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { resourceId }  = stateProps;
  let newDispatchProps = { ...dispatchProps };
  delete newDispatchProps.dispatch;
  return {
    ...stateProps,
    ...newDispatchProps,
    ...ownProps, //ensure expected behavior of non-redux props being accessible
    fetchResource: () => dispatch(fetchResource(resourceId)),
    openEditResourceModal: () =>
      dispatch(openEditResourceModal(resourceId)),
    openConfirmResourceDeleteModal: () =>
      dispatch(openConfirmResourceDeleteModal(resourceId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ResourceShow);
