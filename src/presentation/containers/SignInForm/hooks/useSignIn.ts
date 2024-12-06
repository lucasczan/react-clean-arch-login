import { AppError } from "@/@core/domain/application/Errors/AppError";
import { MakeAuthentication } from "@/@core/infra/factories/AuthenticationFactory";
import { useState } from "react";

type fields = {
	email: string;
	password: string;
	auth: string;
};

export function useSignIn() {
	const [errors, setErrors] = useState<fields>({} as fields);

	const [form, setForm] = useState<fields>({
		email: "",
		password: "",
		auth: "",
	});

	const authentication = MakeAuthentication.make();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await authentication.execute({
				email: form.email,
				password: form.password,
			});
		} catch (error) {
			if (error instanceof AppError) {
				setErrors({
					email:
						error.errors.find((item) => item.field === "email")?.error ?? "",
					password:
						error.errors.find((item) => item.field === "password")?.error ?? "",
					auth: "",
				});
			} else {
				setErrors({
					email: "",
					password: "",
					auth: "Erro de autenticação",
				});
			}
		}
	};

	return { handleSubmit, errors, form, setForm };
}
