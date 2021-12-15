import userReducer from "./userReducer";
import { combineReducers } from "redux";
import addToken from "./addToken";
const rootReducer=combineReducers({
    userReducer,
    addToken
})
export default rootReducer