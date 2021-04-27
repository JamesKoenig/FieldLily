import { 
         RECEIVE_SEARCH
} from '../actions/habit_actions';


const SearchReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_SEARCH:
            return Object.assign({}, oldState, { term: action.term })

        default:
            return oldState
    }
}

export default SearchReducer;