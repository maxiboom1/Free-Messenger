import Joi from "joi";
import { ValidationError } from "./client-errors";

/** 
 * This model only for validation (we use "joi") and credentials object creation.
 * It won't work with DB (we will use UserModel for that), so no need to create mongoose model here.
 * User can provide emailOrNickname (so we have some limitation in validation), and password.
 * */ 



class CredentialsModel {

  public emailOrNickname: string;
  public password: string;

  public constructor(credentials: CredentialsModel) {
      this.emailOrNickname = credentials.emailOrNickname;
      this.password = credentials.password;
  }

  // Login validation schema
  public static loginValidation = Joi.object({
    emailOrNickname: Joi.string().required().min(5).max(40),
    password: Joi.string().required().min(4).max(30),
  });

  // Login validation method
  public validate(): void {
    const result = CredentialsModel.loginValidation.validate(this);
    if(result.error) throw new ValidationError(result.error.message);
  }

}

export default CredentialsModel;