import { IAuthValidator } from "@/@core/application/protocols/validators/IAuthValidator";
import { IValidationResponseError } from "@/@core/application/protocols/validators/IValidatorResponseError";
import * as yup from "yup";

export class YupAuthenticationValidator
  implements IAuthValidator<Promise<IValidationResponseError[]> | []>
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

  async validate(params: { email: string; password: string }) {
    try {
      await this.schema.validate(params, { abortEarly: false });
      return [];
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = error.inner.map((err) => ({
          field: err.path as string,
          message: err.message,
        }));
        return errors;
      }
      return [{ field: "auth", message: "Erro ao autenticar" }];
    }
  }
}
