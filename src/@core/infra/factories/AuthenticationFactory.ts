import { AuhenticateUseCase } from "@/@core/domain/application/useCases/AuthenticationUseCase";
import { AxiosPostHttpClient } from "../http/axiosHttpClient/AxiosPostHttpClient";
import { AuthenticationService } from "../service/AuthenticationService";
import { ZodAuthenticationValidator } from "../validators/authenticationValidator/ZodAuthenticationValidator";

class MakeAuthentication {
	static make() {
		const client = new AxiosPostHttpClient();
		const service = new AuthenticationService(client);
		const validator = new ZodAuthenticationValidator();
		const useCase = new AuhenticateUseCase(service, validator);
		return useCase;
	}
}

export { MakeAuthentication };
