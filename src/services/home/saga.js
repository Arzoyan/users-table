import { call, put, takeLatest } from 'redux-saga/effects';
import * as homeAction from './action';
import { actionTypes } from "./reducer";
import UsersApi from "../../api/usersApi";

function* getData({ payload }) {
    try {
        const result = yield call(UsersApi.getUsers, payload);
        yield put(homeAction.getDataSuccess(result.data));

    } catch (e) {
        yield put({ type: "REQ_FAILD", message: e.message });
    }
}

function* getUser({ payload }) {
    try {
        const result = yield call(UsersApi.getOneUser, payload);
        yield put(homeAction.getOneUserSuccess(result.data));

    } catch (e) {
        yield put(homeAction.failMessage())
        //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* imgUpload({ payload }) {
    try {
        const result = yield call(UsersApi.imgUpload, payload);
        yield put(homeAction.getOneUserSuccess(result.data));

    } catch (e) {
        yield put(homeAction.failMessage())
    }
}

function* editUser({ payload }) {
    try {
        yield call(UsersApi.editUser, payload);
        yield put(homeAction.successMessage())

    } catch (e) {
        yield put(homeAction.failMessage())
    }
}

function* addNewUser({ payload }) {
    try {
        const result = yield call(UsersApi.creatUser, payload);

        yield put(homeAction.addUserSuccess(result.data));
        yield put(homeAction.successMessage())
    } catch (e) {
        yield put(homeAction.failMessage())
    }
}

function* deleteUser({ payload }) {
    try {
        yield call(UsersApi.deleateUser, payload);
        yield put(homeAction.deleteUserSucess(payload));
        yield put(homeAction.successMessage())
    } catch (e) {
        yield put(homeAction.failMessage())
    }
}

function* sortUsers({ payload }) {
    try {
        const result = yield call(UsersApi.sortUsers, payload);
        yield put(homeAction.sortUsersSuccess(result.data));
    } catch (e) {
        yield put(homeAction.failMessage())
    }
}

function* homeSaga() {
    yield takeLatest(actionTypes.GET_DATA, getData);
    yield takeLatest(actionTypes.GET_ONE_USER, getUser);
    yield takeLatest(actionTypes.IMG_UPLOAD, imgUpload);
    yield takeLatest(actionTypes.EDIT_USER, editUser);
    yield takeLatest(actionTypes.ADD_USER, addNewUser);
    yield takeLatest(actionTypes.DELETE_USER, deleteUser);
    yield takeLatest(actionTypes.SORT_USERS, sortUsers);
}

export default homeSaga;