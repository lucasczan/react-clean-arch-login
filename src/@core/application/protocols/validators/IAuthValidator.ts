type authenticationParamsType = {
  email: string;
  password: string;
};

export interface IAuthValidator<T> {
  validate(params: authenticationParamsType): T;
}
