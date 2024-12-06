type paramsType = {
	email: string;
	password: string;
};

type responseType = {
	accessToken: string;
};

namespace IAuthenticationModel {
	export type params = paramsType;
	export type response = responseType;
}

export type { IAuthenticationModel };
