import { combineReducers } from "redux";
import { adminLoginReducer } from "./admin/authentication/reducers";

const reducers = combineReducers({
    adminSignin : adminLoginReducer
})

export default reducers