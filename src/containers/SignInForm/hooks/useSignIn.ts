import { AuthenticationUseCase } from "@/@core/application/useCases/AuthenticationUseCase";
import { RemoteAuthenticationRepository } from "@/@core/infra/data/repositories/authenticationRepository/RemoteAuthenticationRepository";
import { AxiosPostHttpClient } from "@/@core/infra/http/axiosHttpClient/AxiosPostHttpClient";
import { YupAuthenticationValidator } from "@/@core/infra/validators/authenticationValidator/YupAuthenticationValidator";
import { ZodAuthenticationValidator } from "@/@core/infra/validators/authenticationValidator/ZodAuthenticationValidator";
import { useState } from "react";

type fields = {
  email: string;
  password: string;
  auth: string;
};

export function useSignIn() {
  const [form, setForm] = useState<fields>({
    email: "",
    password: "",
    auth: "",
  });

  const [errors, setErrors] = useState<fields>({} as fields);

  const axiosHttpPostClient = new AxiosPostHttpClient();

  const authenticationRepository = new RemoteAuthenticationRepository(
    axiosHttpPostClient
  );

  const authenticationValidator = new ZodAuthenticationValidator();

  const authenticationUseCase = new AuthenticationUseCase(
    authenticationRepository
  );

  const validateFields = () => {
    const errors = authenticationValidator.validate({
      email: form.email,
      password: form.password,
    });

    const hasErrors = errors.length > 0;

    if (hasErrors) {
      const emailError = errors.find(
        (field) => field.field === "email"
      )?.message;

      const passwordError = errors.find(
        (field) => field.field === "password"
      )?.message;

      setErrors({
        email: emailError ?? "",
        password: passwordError ?? "",
        auth: "",
      });
    }

    return hasErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const hasErrors = validateFields();

    if (hasErrors) return;

    setErrors({} as fields);

    authenticationUseCase
      .execute({
        email: form.email,
        password: form.password,
      })
      .then(() => {
        alert("success");
      })
      .catch(() => setErrors({ auth: "Erro de autentição" } as fields));
  };

  return { handleSubmit, errors, form, setForm };
}
