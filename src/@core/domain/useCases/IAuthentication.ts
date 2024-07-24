import { IAccountModel } from "../models/IAccountModel";
import { authenticateParamsType } from "../repositories/authentication/IAuthenticationRepository";

export interface IAuthentication {
  execute(params: authenticateParamsType): Promise<IAccountModel | null>;
}
