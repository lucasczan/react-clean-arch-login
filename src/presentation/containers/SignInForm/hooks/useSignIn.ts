import { AppError } from "@/@core/domain/application/Errors/AppError";
import { MakeAuthentication } from "@/@core/infra/factories/AuthenticationFactory";
import { useForm } from "react-hook-form";

export function useSignIn() {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const authentication = MakeAuthentication();

	const handleSubmit = form.handleSubmit(async ({ email, password }) => {
		try {
			const response = await authentication.execute({
				email,
				password,
			});
		} catch (error) {
			if (error instanceof AppError) {
				form.setError("email", {
					message:
						error.errors.find((item) => item.field === "email")?.error ?? "",
				});
				form.setError("password", {
					message:
						error.errors.find((item) => item.field === "password")?.error ?? "",
				});
			} else {
				alert("Connection server error");
			}
		}
	});

	return { handleSubmit, form };
}
