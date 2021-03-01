import { RECEIVE_ALL_RESOURCES,
         RECEIVE_RESOURCE,
         REMOVE_RESOURCE
} from '../actions/resource_actions';


const ResourceReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_RESOURCES:
            return Object.assign({}, oldState, action.resources)
 
        case RECEIVE_RESOURCE:
            return Object.assign({}, oldState, { [action.resource.id]: action.resource })
            
        case REMOVE_RESOURCE:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.ResourceId]
            return nextState
        default:
            return oldState
    }
}

export default ResourceReducer;