import { connect } from 'react-redux';

import { deleteResource } from '../../actions/resource_actions';
import entityDeleteConfirmPrompt from '../modal/confirm_delete';
import { closeModal } from '../../actions/modal/modal_common_actions';

const mSTP = ({
  entities: {
    resources: {
      all: resources,
    }
  },
  ui: {
    modal: {
      misc: {
        resourceId,
      }
    }
  },
}) => {
  const { _id: id, title } = resources[resourceId] ||
     { _id: undefined, title: undefined };
  return {
    type: "resource",
    id,
    title,
  }
}

const mDTP = {
  deleteEntityCallback: deleteResource,
  closeModal,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  deleteEntityCallback: () =>
    dispatchProps.deleteEntityCallback(stateProps.id),
  }
};

export default connect(
    mSTP,
    mDTP,
    mergeProps,
  )(entityDeleteConfirmPrompt);
