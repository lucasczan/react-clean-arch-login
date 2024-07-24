import { IAccountModel } from "@/@core/domain/models/IAccountModel";
import { IAuthentication } from "@/@core/domain/useCases/IAuthentication";
import {
  IAuthenticationRepository,
  authenticateParamsType,
} from "@/@core/domain/repositories/authentication/IAuthenticationRepository";

export class AuthenticationUseCase implements IAuthentication {
  constructor(private authenticationRepository: IAuthenticationRepository) {}
  async execute(params: authenticateParamsType): Promise<IAccountModel | null> {
    const account = await this.authenticationRepository.create(params);
    return account;
  }
}
