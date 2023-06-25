import axios from "axios";
import appConfig from "../4-utils/app-config";


async function getAllUsers() {
    const res = await axios.get(appConfig.users);
    const users = res.data;
    return users;
}

export default {
    getAllUsers,
};

