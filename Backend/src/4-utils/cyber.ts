import UserModel from "../2-models/user-model";
import jwt from "jsonwebtoken";
import { Request } from "express";
import { UnauthorizedError } from "../2-models/client-errors";

const secretKey = "Bla bla bla";

// Create new token:
function createToken(user: UserModel): string {

    // Create container containing the user:
    const container = { user };

    // Create options:
    const options = { expiresIn: "3h" };

    // Create token: 
    const token = jwt.sign(container, secretKey, options);

    // Return: 
    return token;
}

// The token is in a header named authorization
// authorization: "Bearer the-token"
//                 01234567
async function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

        // Extract header:
        const header = request.header("authorization"); // "Bearer the-token"

        // If no header:
        if (!header) {
            reject(new UnauthorizedError("Incorrect username or password"));
            return;
        }

        // Extract token:
        const token = header.substring(7);

        // If no token:
        if (!token) {
            reject(new UnauthorizedError("Incorrect username or password"));
            return;
        }

        // Verify:
        jwt.verify(token, secretKey, err => {

            if (err) {
                reject(new UnauthorizedError("Invalid token"));
                return;
            }

            // All is good:
            resolve(true);

        });

    });
}


export default {
    createToken,
    verifyToken
};
