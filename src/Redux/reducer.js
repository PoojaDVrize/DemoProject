import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    UPDATE_ISLOGGEDIN,
    DELETE_LOGIN_DATA,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    LOGOUT
} from "./action"

const initialState = {
    isLoading: false,
    data: null,
    error: null,
    isLoggedIn: false
}
const profileState = {
    isLoading: false,
    data: null,
    error: null,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null,
                isLoggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.error
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        case UPDATE_ISLOGGEDIN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case DELETE_LOGIN_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: return state;
    }
}

export const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            }
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.error
            }
        default: return state;
    }
}