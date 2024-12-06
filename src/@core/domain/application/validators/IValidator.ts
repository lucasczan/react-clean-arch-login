export type errorType = {
	field: string;
	error: string;
};

export interface IValidator<T> {
	validate(params: T): errorType[] | null;
}
