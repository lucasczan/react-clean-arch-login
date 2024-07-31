import { IValidationResponseError } from "./IValidatorResponseError";

type authenticationParamsType = {
  email: string;
  password: string;
};

export interface IAuthValidator {
  validate(params: authenticationParamsType): IValidationResponseError[] | [];
}
