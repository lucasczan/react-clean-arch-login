import type { IHttpPostClient } from "@/@core/domain/application/http/IHttpPostClient";
import type { IAuthenticationModel } from "@/@core/domain/enterprise/models/IAuthenticationModel";
import axios, { type AxiosRequestConfig } from "axios";

export class AxiosPostHttpClient
	implements IHttpPostClient<IAuthenticationModel.response>
{
	async post(
		url: string,
		body: object,
		headers: AxiosRequestConfig<object> | undefined,
	): Promise<IAuthenticationModel.response> {
		return await axios.post(url, body, headers);
	}
}
