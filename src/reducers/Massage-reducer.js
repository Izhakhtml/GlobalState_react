import { GOODLUCK, PRIMARY, SECONDARY, ERROR, INFO, WARNING, SHOW } from '../actions/Massage-types'
const Reducers = (state, action) => {
    switch (action.type) {
        case GOODLUCK:
            return {...state,isOpen:true,...action.payload};
        case PRIMARY:
            return action.payload;
        case SECONDARY:
            return action.payload;
        case ERROR:
            return action.payload;
        case INFO:
            return action.payload;
        case WARNING:
            return action.payload;
        case SHOW:
            return {...state,isOpen:false};
        default:
            return state
    }
}
export default Reducers;