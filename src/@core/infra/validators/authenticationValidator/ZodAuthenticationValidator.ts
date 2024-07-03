import { IAuthValidator } from "@/@core/application/protocols/validators/IAuthValidator";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Campo obrigatório"),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
});

export class ZodAuthenticationValidator implements IAuthValidator {
  validate(params: {
    email: string;
    password: string;
  }): { field: string; error: string }[] {
    try {
      authSchema.parse({
        email: params.email,
        password: params.password,
      });
      return [];
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => ({
          field: String(err.path[0]),
          error: err.message,
        }));
        return errors;
      }
      return [];
    }
  }
}
