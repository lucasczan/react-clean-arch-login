import { IAccountModel } from "../models/AccountModel";
import { authenticateParamsType } from "../repositories/authentication/AuthenticationRepository";

export interface IAuthentication {
  execute(params: authenticateParamsType): Promise<IAccountModel | null>;
}
