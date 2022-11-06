import { Alert } from "reactstrap";
import * as ActionTypes from "./ActionTypes";
export const Comments=(state={
    errMess:null,
    feedbacks:[]

},action)=>{
    switch(action.type){
        case ActionTypes.ADD_FEEDBACK:
            var feedback=action.payload;
            feedback.id=state.feedbacks.length;
            return {...state,feedbacks:state.feedbacks.concat(feedback)};
        case ActionTypes.ADD_FEEDBACKS:
            return {...state,errMess:null,feedbacks:action.payload};
        case ActionTypes.FEEDBACKS_FAILED:
            return {...state,errMess:action.payload,feedbacks:[]};
        default:
            return state;
    }
}  