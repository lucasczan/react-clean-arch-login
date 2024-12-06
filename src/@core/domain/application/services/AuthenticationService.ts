import type { IAuthenticationModel } from "../../enterprise/models/IAuthenticationModel";

export interface IAuthenticationService {
	authenticate(
		body: IAuthenticationModel.params,
	): Promise<IAuthenticationModel.response>;
}
