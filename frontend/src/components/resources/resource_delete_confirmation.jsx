import React from 'react';

import { connect } from 'react-redux';

//import { deleteResource } from '../../actions/resource_actions';

const mSTP = state => ({
  resource: state.entities.resources.all[state.ui.modal.misc.resourceId],
})

const ResourceDeleteConfirmPrompt = (
) => {
  return (<p>hello world!</p>);
}

export default connect(
    mSTP,
    null,
  )(ResourceDeleteConfirmPrompt);
