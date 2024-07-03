export type postParamsType = {
  body: object;
};

interface IHttpPostClient {
  post(url: string, params: postParamsType, headers?: object): Promise<any>;
}

export type { IHttpPostClient };
