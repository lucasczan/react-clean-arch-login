import type {
	errorType,
	IValidator,
} from "@/@core/domain/application/validators/IValidator";
import type { IAuthenticationModel } from "@/@core/domain/enterprise/models/IAuthenticationModel";
import * as yup from "yup";

export class YupAuthenticationValidator
	implements IValidator<IAuthenticationModel.params>
{
	private schema: yup.Schema;

	constructor() {
		this.schema = yup.object().shape({
			email: yup.string().required("Campo obrigatório").email("Campo inválido"),
			password: yup
				.string()
				.required("Campo obrigatório")
				.min(6, "A senha deve conter pelo menos 6 caracteres"),
		});
	}

	validate(params: { email: string; password: string }): errorType[] | null {
		try {
			this.schema.validateSync(params, { abortEarly: false });
			return null;
		} catch (error) {
			if (error instanceof yup.ValidationError) {
				const errors = error.inner.map((err) => ({
					field: err.path as string,
					error: err.message,
				}));
				return errors;
			}
			return [{ field: "auth", error: "Erro ao autenticar" }];
		}
	}
}
