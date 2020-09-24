class AppError {
  message;
  statusCode = 400; // default

  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;