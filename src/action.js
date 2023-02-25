import * as types from '../src/constant'

export const getRequestUser = () => {
    return {
        type: types.GET_REQUEST_USER
    }
}

export const getSuccessUser = (payload) => {
    return {
        type: types.GET_SUCCESS_USER,
        payload
    }
}

export const getFailureUser = (payload) => {
    return {
        type: types.GET_FAILURE_USER,
        payload
    }
}