import { IAccountModel } from "../../models/IAccountModel";

export type authenticateParamsType = {
  email: string;
  password: string;
};

export interface IAuthenticationRepository {
  create(params: authenticateParamsType): Promise<IAccountModel | null>;
}
