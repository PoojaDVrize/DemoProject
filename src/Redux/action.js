import axios from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const UPDATE_ISLOGGEDIN = 'UPDATE_ISLOGGEDIN';
export const DELETE_LOGIN_DATA = 'DELETE_LOGIN_DATA';

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const loginUser = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await axios.get('https://mocki.io/v1/0db510de-acce-421d-9153-adca4959a446');
        if (email == response.data.email && password == response.data.password)
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        else
            dispatch({ type: LOGIN_FAILURE, error: "invalid cred" });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
}

export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    try {
        const response = await axios.get('https://mocki.io/v1/8f6f4522-781d-44f3-bcd8-1e64ea5d5526');
        dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_PROFILE_FAILURE, error: error.message });
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    };
};


export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: UPDATE_ISLOGGEDIN,
        payload: isLoggedIn
    }
}

export const deleteLoginData = () => {
    return {
        type: DELETE_LOGIN_DATA,
        payload: null
    }
}

