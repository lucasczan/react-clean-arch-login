
export type errorType = {
    field: string;
    error: string;
}

class AppError extends Error{
    errors: errorType[]
    constructor(errors:errorType[]){
        super('')
        this.errors = errors
    }
}

export {AppError}