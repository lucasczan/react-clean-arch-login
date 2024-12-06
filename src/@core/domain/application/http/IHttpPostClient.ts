interface IHttpPostClient<T> {
	post(url: string, body: object, headers?: object): Promise<T>;
}

export type { IHttpPostClient };
