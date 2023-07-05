import mongoose from "mongoose";
import appConfig from "./app-config";

async function connect(): Promise<void> {
    try {
        const db = await mongoose.connect(appConfig.usersDb);
        console.log(`We're connected to ${db.connections[0].name} on MongoDB`);
    }
    catch(err: any) {
        console.log(err);
    }
}

export default {
    connect
};