import { combineReducers } from "redux";
import { adminLoginReducer, adminSignupReducer } from "./admin/authentication/reducers";

const reducers = combineReducers({
    adminSignin : adminLoginReducer,
    adminSignup : adminSignupReducer
})

export default reducers