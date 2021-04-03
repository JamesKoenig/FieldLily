import { RECEIVE_ALL_RESOURCES,
         RECEIVE_RESOURCE,
         REMOVE_RESOURCE
} from '../../actions/resource_actions';


const ResourceReducer = (oldState = {},
                         {type, resources, resource, resourceId}) => {
    Object.freeze(oldState)
    switch (type) {
        case RECEIVE_ALL_RESOURCES:
            return Object.assign({}, oldState, resources)
        case RECEIVE_RESOURCE:
            return Object.assign({}, oldState, resource)
        case REMOVE_RESOURCE: {
            let nextState = Object.assign({}, oldState);
            delete nextState[resourceId];
            return nextState;
          }
        default:
            return oldState;
    }
}

export default ResourceReducer;
