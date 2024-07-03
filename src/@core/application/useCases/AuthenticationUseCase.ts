import { IAccountModel } from "@/@core/domain/models/AccountModel";
import {
  IAuthenticationRepository,
  authenticateParamsType,
} from "@/@core/domain/repositories/authentication/AuthenticationRepository";
import { IAuthentication } from "@/@core/domain/useCases/Authentication";

export class AuthenticationUseCase implements IAuthentication {
  constructor(private authenticationRepository: IAuthenticationRepository) {}
  async execute(params: authenticateParamsType): Promise<IAccountModel | null> {
    const account = await this.authenticationRepository.create(params);
    return account;
  }
}
