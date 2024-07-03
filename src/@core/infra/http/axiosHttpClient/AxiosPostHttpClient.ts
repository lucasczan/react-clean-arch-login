import {
  IHttpPostClient,
  postParamsType,
} from "@/@core/application/protocols/http/IHttpPostClient";
import axios, { AxiosRequestConfig } from "axios";

export class AxiosPostHttpClient implements IHttpPostClient {
  post(
    url: string,
    params: postParamsType,
    headers: AxiosRequestConfig<object> | undefined
  ): Promise<any> {
    return axios.post(url, params.body, headers);
  }
}
