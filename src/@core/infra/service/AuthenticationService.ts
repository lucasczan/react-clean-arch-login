import type { IHttpPostClient } from "@/@core/domain/application/http/IHttpPostClient";
import type { IAuthenticationModel } from "@/@core/domain/enterprise/models/IAuthenticationModel";
import type { IAuthenticationService } from "@/@core/domain/application/services/AuthenticationService";

class AuthenticationService implements IAuthenticationService {
	constructor(
		private httpClient: IHttpPostClient<IAuthenticationModel.response>,
	) {}
	async authenticate(
		body: IAuthenticationModel.params,
	): Promise<IAuthenticationModel.response> {
		const response = await this.httpClient.post(
			"http://localhost:3333/authenticate",
			body,
		);
		return response;
	}
}
export { AuthenticationService };
