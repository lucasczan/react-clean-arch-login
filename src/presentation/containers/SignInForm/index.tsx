"use client";

import { Input } from "@/presentation/components/Input";
import { useSignIn } from "./hooks/useSignIn";

export function SignInForm() {
	const { form, handleSubmit } = useSignIn();

	return (
		<div className="flex justify-center items-center h-screen ">
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						action="#"
						method="POST"
						onSubmit={handleSubmit}
					>
						<div className="mt-2">
							<Input
								{...form.register("email")}
								label="Email address"
								id="email"
								type="email"
								error={form.formState.errors.email?.message}
								autoComplete="email"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<div>
							<div className="mt-2">
								<Input
									{...form.register("password")}
									label="Password"
									id="password"
									type="password"
									error={form.formState.errors.password?.message}
									autoComplete="current-password"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{form.formState.isSubmitting ? "..." : "Sign in"}
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{" "}
						<a
							href="/"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Start a 14 day free trial
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
