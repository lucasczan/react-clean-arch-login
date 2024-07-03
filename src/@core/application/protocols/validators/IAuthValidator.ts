type authenticationParamsType = {
  email: string;
  password: string;
};

export interface IAuthValidator {
  validate(
    params: authenticationParamsType
  ): { field: string; error: string }[] | [];
}
