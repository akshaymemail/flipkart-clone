import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_SUCCESS, ADMIN_SIGNUP_FAILURE, ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCCESS } from "./types"

// ADMIN LOGIN INITIAL STATE
const adminLoginInitialState = {
    loading : false,
    isLoggedIn : localStorage.getItem('token') ? true : false,
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null,
    user : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
    error : ''
}

const adminSignupInitialState = {
    loading : false,
    message : '',
    success : false,
    error : ''
}

// ADMIN LOGIN REDUCER
export const adminLoginReducer = (state = adminLoginInitialState, action) => {
    switch(action.type){
        case ADMIN_LOGIN_REQUEST : return {
            loading : true
        }
        case ADMIN_LOGIN_SUCCESS : return {
            loading : false,
            isLoggedIn : true,
            token : action.token,
            user : action.user,
        }
        case ADMIN_LOGIN_FAILURE : return {
            loading : false,
            error : action.payload
        }
        case ADMIN_LOGOUT_SUCCESS : return {}
        default : return  state
    }
}

// ADMIN SIGNUP REDUCER
export const adminSignupReducer = (state = adminSignupInitialState, action) => {
    switch(action.type){
        case ADMIN_SIGNUP_REQUEST : return {
            loading : true
        }
        case ADMIN_SIGNUP_SUCCESS : return {
            loading : false,
            message : action.payload,
            success : true
        }
        case ADMIN_SIGNUP_FAILURE : return {
            loading : false,
            error : action.payload
        }

        default: return state
    }
}