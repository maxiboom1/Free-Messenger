import { OkPacket } from "mysql";
import { UnauthorizedError, ValidationError } from "../2-models/client-errors";
import CredentialsModel from "../2-models/credentials-model";
import UserModel from "../2-models/user-model";
import cyber from "../4-utils/cyber";
import dal from "../4-utils/dal";

// Register new user: 
async function register(user: UserModel): Promise<string> {

    // TODO: Joi Validation...

    // Is username taken:
    const isTaken = await isUsernameTaken(user.username);
    if(isTaken) throw new ValidationError(`Username ${user.username} already taken`);


    // Create query:
    const sql = `INSERT INTO users VALUES(
        DEFAULT,
        '${user.firstName}',
        '${user.lastName}',
        '${user.username}',
        '${user.password}',
        '${user.isOnline}')`;
    
    // Execute: 
    const result: OkPacket = await dal.execute(sql);

    // Set back auto-increment id:
    user.userId = result.insertId;

    // Create token:
    const token = cyber.createToken(user);

    // Return token:
    return token;
}

/**
 * 
 * @param username Username to check
 * @returns Return true if username taken
 */
async function isUsernameTaken(username: string): Promise<boolean> {

    // Create query:
    const sql = `SELECT EXISTS(SELECT * FROM users WHERE username = '${username}') AS isTaken`;

    // Execute: 
    const arr = await dal.execute(sql);

    // Get is taken value:
    const isTaken: number = arr[0].isTaken;

    // Return true if username taken:
    return isTaken === 1;
}

// Login:
async function login(credentials: CredentialsModel): Promise<string> {

    // TODO: Joi Validation...

    // Query:
    const sql = `SELECT * FROM users WHERE
        username = '${credentials.username}' AND
        password = '${credentials.password}'`;

    // Execute:
    const users = await dal.execute(sql);

    // Extract user:
    const user = users[0];

    // If user not exist:
    if(!user) throw new UnauthorizedError("Incorrect username or password");

    // Create token:
    const token = cyber.createToken(user);

    // Return token:
    return token;
}

export default {
    register,
    login
};
