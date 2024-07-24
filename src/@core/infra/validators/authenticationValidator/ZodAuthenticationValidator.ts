import { IAuthValidator } from "@/@core/application/protocols/validators/IAuthValidator";
import { IValidationResponseError } from "@/@core/application/protocols/validators/IValidatorResponseError";
import { z } from "zod";

export class ZodAuthenticationValidator
  implements IAuthValidator<IValidationResponseError[] | []>
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
  validate(params: { email: string; password: string }) {
    try {
      this.schema.parse({
        email: params.email,
        password: params.password,
      });
      return [];
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => ({
          field: String(err.path[0]),
          message: err.message,
        }));
        return errors;
      }
      return [{ field: "auth", message: "Erro ao autenticar" }];
    }
  }
}
