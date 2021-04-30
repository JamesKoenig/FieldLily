import { connect } from 'react-redux';
import ResourceShow from './resource_show';
import { fetchResource } from '../../actions/resource_actions';
import { fetchHabits } from '../../actions/habit_actions';
import { openEditResourceModal }
  from '../../actions/modal/resource_modal_actions';
import { openConfirmResourceDeleteModal }
  from '../../actions/modal/confirmation_modal_actions';

const mapStateToProps = ({
                            session: { user: currentUser },
                            entities: { resources: { all: resources },
                                      habits: { all: habits } } },
                         {match: {params: { resourceId } } }) => {
  let resource = resources[resourceId];
  return {
    resourceId,
    resource,
    totalLikes: resource.totalLikes,
    habit: resource ? habits[resource.habit] : undefined,
    currentUser: currentUser,
  }
};

const mapDispatchToProps = {
  fetchHabits,
  fetchResource,
  openEditResourceModal,
  openConfirmResourceDeleteModal,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { resourceId } = stateProps;
  const {
  fetchResource,
  openEditResourceModal,
  openConfirmResourceDeleteModal,
  } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps, //ensure expected behavior of non-redux props being accessible
    fetchResource: () => fetchResource(resourceId),
    openEditResourceModal: () => openEditResourceModal(resourceId),
    openConfirmResourceDeleteModal: () =>
      openConfirmResourceDeleteModal(resourceId),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ResourceShow);
