import { combineReducers } from "redux";
import sessionReducer from './session_reducer'
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";

const rootReducer = combineReducers({
    sessionReducer,
    errorsReducer,
    entitiesReducer,
});

export default rootReducer;
