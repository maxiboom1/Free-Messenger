import crypto from "crypto";

function hashPassword(password: string): string {

    const salt = "Anveks";  

    const hashedPassword = crypto.createHmac("sha512", salt).update(password).digest("hex");

    return hashedPassword;

}

export default {
    hashPassword
};