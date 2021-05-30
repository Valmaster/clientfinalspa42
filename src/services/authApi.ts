import jwtDecode from "jwt-decode";
import axios from 'axios';

function logout() {
    window.localStorage.removeItem("authToken")
    delete axios.defaults.headers["Authorization"]
}

function authenticate(credentials: any) {
    return axios
        .post('http://localhost:3000/users/signin', credentials)
        .then(response => response.data.accessToken)
        .then(token => {
            window.localStorage.setItem("authToken", token);
            setAxiosToken(token)
        })
}

function setup() {
    const token = window.localStorage.getItem("authToken")
    if (token) {
        const jwtData: any = jwtDecode(token)
        if (jwtData.exp * 1000 > new Date().getTime()) {
            setAxiosToken(token)
        } else {
            logout()
        }
    } else {
        logout()
    }
}

function isAuthenticated() {
    const token = window.localStorage.getItem("authToken")

    if (token) {
        const jwtData: any = jwtDecode(token)
        if (jwtData.exp * 1000 > new Date().getTime()) {
            return true
        }
        return false
    }
    return false
}

function setAxiosToken(token: string) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

export default {
    logout,
    authenticate,
    setup,
    isAuthenticated
}

