import axios from "axios";
import appConfig from "../4-utils/app-config";



async function getAllUsers() {
    const res = await axios.get(appConfig.users);
    const users = res.data;
    return users;
}
// Preparation
async function register() {
    const res = await axios.post(appConfig.register, "user");
    const token = res.data;
    return token;
}
// Preparation
async function login() {
    const res = await axios.post(appConfig.login, "cred");
    const token = res.data;
    return token;
}


export default {
    register,
    login,
    getAllUsers,
};

