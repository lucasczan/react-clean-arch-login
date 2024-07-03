import { IHttpPostClient } from "@/@core/application/protocols/http/IHttpPostClient";
import { IAccountModel } from "@/@core/domain/models/AccountModel";
import {
  IAuthenticationRepository,
  authenticateParamsType,
} from "@/@core/domain/repositories/authentication/AuthenticationRepository";

export class RemoteAuthenticationRepository
  implements IAuthenticationRepository
{
  constructor(private httpPostClient: IHttpPostClient) {}
  async create(params: authenticateParamsType): Promise<IAccountModel | null> {
    const response = await this.httpPostClient.post("http://localhost:3333", {
      body: { ...params },
    });
    return response;
  }
}
