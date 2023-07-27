class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
