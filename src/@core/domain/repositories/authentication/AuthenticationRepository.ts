import { IAccountModel } from "../../models/AccountModel";

export type authenticateParamsType = {
  email: string;
  password: string;
};

export interface IAuthenticationRepository {
  create(params: authenticateParamsType): Promise<IAccountModel | null>;
}
