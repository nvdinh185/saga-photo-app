import * as types from '../constant';

const default_state = {
  listUser: [],
  isFetching: false,
  error: 'can not found data'

}

export default (state = default_state, action) => {
  switch (action.type) {

    case types.GET_REQUEST_USER:
      return { ...state, isFetching: true }

    case types.GET_SUCCESS_USER:
      return { ...state, isFetching: false, listUser: action.payload }

    case types.GET_FAILURE_USER:
      return { ...state, isFetching: true }

    default:
      return state;
  }
}
