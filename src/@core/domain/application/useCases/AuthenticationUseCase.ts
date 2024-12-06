import type { IAuthenticationModel } from "@/@core/domain/enterprise/models/IAuthenticationModel";
import type { IAuthenticationService } from "@/@core/domain/application/services/AuthenticationService";
import type { IValidator } from "../validators/IValidator";
import { AppError } from "../Errors/AppError";

export class AuhenticateUseCase {
	constructor(
		private authenticationService: IAuthenticationService,
		private validator: IValidator<IAuthenticationModel.params>,
	) {}
	async execute(
		params: IAuthenticationModel.params,
	): Promise<IAuthenticationModel.response> {
		const errors = this.validator.validate(params);
		if (errors) throw new AppError(errors);
		const response = await this.authenticationService.authenticate(params);
		return response;
	}
}
