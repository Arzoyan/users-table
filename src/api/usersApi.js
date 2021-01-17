import axios from "axios";
import { API_URL } from "../halpers/constants";


export default class UsersApi {

    static getUsers(data = 1) {
        return axios.request({
            url: `${API_URL}/users?_page=${data.page}&_limit=${data.size}&_order=${data._order || ""}`,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }

    static getOneUser(userId = null) {
        return axios.request({
            url: `${API_URL}/users/${userId}`,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }

    static imgUpload(file = null) {
        return axios.request({
            url: `${API_URL}/images`,
            method: "POST",
            data: file,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }

    static creatUser(data = null) {
        return axios.request({
            url: `${API_URL}/users`,
            method: "POST",
            data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }

    static editUser(data = null) {
        return axios.request({
            url: `${API_URL}/users/${data.id}`,
            method: "PATCH",
            data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }

    static deleateUser(userId = null) {
        return axios.request({
            url: `${API_URL}/users/${userId}`,
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }

    static sortUsers(data) {
        return axios.request({
            url: `${API_URL}/users?_sort=${data._sort}&_order=${data._order}&_limit=${data.size}`,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });
    }
}

