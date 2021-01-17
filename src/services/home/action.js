import { actionTypes } from "./reducer";
import 'antd/dist/antd.css';
import { message } from 'antd';



export const getUsers = (data) => {
    return { type: actionTypes.GET_DATA, payload: data };
}

export const getDataSuccess = (data) => {
    return { type: actionTypes.GET_DATA_SUCESS, payload: data };
}

export const getDataFail = (data) => {
    return { type: actionTypes.GET_DATA_FAIL, payload: data };
}

export const getOneUser = (userId) => {
    return { type: actionTypes.GET_ONE_USER, payload: userId };
}

export const getOneUserSuccess = (userId) => {
    return { type: actionTypes.GET_ONE_USER_SUCCESS, payload: userId };
}

export const reqFaild = (userId) => {
    return { type: actionTypes.REQ_FAILD, payload: userId };
}

export const resetUser = () => {
    return { type: actionTypes.RESET_USER };
}

export const uploadImg = (file) => {
    return { type: actionTypes.IMG_UPLOAD, payload: file };
}

export const uploadImgSuccess = (data) => {
    return { type: actionTypes.IMG_UPLOAD_SUCCESS, payload: data };
}

export const editUser = (data) => {
    return { type: actionTypes.EDIT_USER, payload: data };
}

export const addUser = (data) => {
    return { type: actionTypes.ADD_USER, payload: data };
}

export const addUserSuccess = (data) => {
    return { type: actionTypes.ADD_USER_SUCCESS, payload: data };
}

export const deleteUser = (data) => {
    return { type: actionTypes.DELETE_USER, payload: data };
}

export const deleteUserSucess = (data) => {
    return { type: actionTypes.DELETE_USER_SUCCESS, payload: data };
}
export const sortUsers = (data) => {
    return { type: actionTypes.SORT_USERS, payload: data };
}
export const sortUsersSuccess = (data) => {
    return { type: actionTypes.SORT_USERS_SUCCESS, payload: data };
}

export const successMessage = () => {
    message.loading({ content: 'Loading...', key: 'updatable' });
    setTimeout(() => {
        message.success({ content: 'sucess!', key: 'updatable', duration: 2 });
    }, 1000);
};
export const failMessage = () => {
    message.loading({ content: 'Loading...', key: 'updatable' });
    setTimeout(() => {
        message.error({ content: 'error!', key: 'updatable', duration: 2 });
    }, 1000);
};