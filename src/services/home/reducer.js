export const actionTypes = {
    GET_DATA: "GET_DATA",
    GET_DATA_SUCESS: "GET_DATA_SUCESS",

    GET_ONE_USER: "GET_ONE_USER",
    GET_ONE_USER_SUCCESS: "GET_ONE_USER_SUCCESS",

    REQ_FAILD: "REQ_FAILD",
    RESET_USER: "RESET_USER",

    IMG_UPLOAD: "IMG_UPLOAD",
    IMG_UPLOAD_SUCCESS: "IMG_UPLOAD_SUCCESS",

    ADD_USER: "ADD_USER",
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",

    EDIT_USER: "EDIT_USER",

    DELETE_USER: "DELETE_USER",
    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",

    SORT_USERS: "SORT_USERS",
    SORT_USERS_SUCCESS: "SORT_USERS_SUCCESS"
};

const intState = {
    data: null,
    user: null
};

const home = (state = intState, { type, payload }) => {

    switch (type) {
        case actionTypes.GET_DATA: {
            return {
                ...state,
                data: null
            }
        }
        case actionTypes.SORT_USERS_SUCCESS:
        case actionTypes.GET_DATA_SUCESS: {
            return {
                ...state,
                data: payload
            }
        }
        case actionTypes.ADD_USER_SUCCESS: {
            let newData = state.data ? state.data : [];
            newData.unshift(payload)
            return {
                ...state,
                data: newData
            }
        }
        case actionTypes.GET_ONE_USER_SUCCESS: {
            return {
                ...state,
                user: payload
            }
        }
        case actionTypes.RESET_USER: {
            return {
                ...state,
                user: null
            }
        }
        case actionTypes.DELETE_USER_SUCCESS: {
            let users = state?.data.filter(item => item.id !== payload);
            return {
                ...state,
                data: users
            }
        }
        default:
            return state
    }
}

export default home