import * as callAPI from '../fetchAPI/fetchAPI';
import * as Actions from '../action';
import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../constant';

function* handleGetUser() {
    try {
        const res = yield callAPI.getUser();
        console.log(res, "day la res cua saga");
        yield put(Actions.getSuccessUser(res));
    } catch (error) {
        yield put(Actions.getFailureUser(error));
    }
}
const userSaga = [
    takeEvery(types.GET_REQUEST_USER, handleGetUser)
]
export default userSaga