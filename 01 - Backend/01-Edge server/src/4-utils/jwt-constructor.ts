import jwt from "jsonwebtoken";

const secretKey = "My special secret key";

async function createToken(user: any): Promise<string> {

    // Delete password for security reasons, and user lowercase
    delete user.password; 
    delete user.nickName_lowercase;
    // Create container containing the user:
    const container = { user };

    // Create options:
    const options = { expiresIn: "6h" };

    // Create token: 
    const token = jwt.sign(container, secretKey, options);

    return token;

}

export default {
    createToken
}