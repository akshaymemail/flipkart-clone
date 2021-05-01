import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS } from "./types"

// ADMIN LOGIN INITIAL STATE
const adminLoginInitialState = {
    loading : false,
    isLoggedIn : localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false,
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null,
    user : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
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
        default : return  state
    }
}