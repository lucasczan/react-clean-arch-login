import type {
	errorType,
	IValidator,
} from "@/@core/domain/application/validators/IValidator";
import type { IAuthenticationModel } from "@/@core/domain/enterprise/models/IAuthenticationModel";
import { z } from "zod";

export class ZodAuthenticationValidator
	implements IValidator<IAuthenticationModel.params>
{
	private schema: z.ZodSchema;

	constructor() {
		this.schema = z.object({
			email: z
				.string({ required_error: "Campo obrigatório" })
				.min(1, "Campo obrigatório")
				.email("Email inválido"),
			password: z
				.string({ required_error: "Campo obrigatório" })
				.min(6, "A senha deve conter pelo menos 6 caracteres"),
		});
	}
	validate(params: { email: string; password: string }): errorType[] | null {
		try {
			this.schema.parse({
				email: params.email,
				password: params.password,
			});
			return null;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const errors = error.errors.map((err) => ({
					field: String(err.path[0]),
					error: err.message,
				}));
				return errors;
			}
			return [{ field: "auth", error: "Erro ao autenticar" }];
		}
	}
}
