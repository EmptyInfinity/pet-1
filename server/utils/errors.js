class ValidationError extends Error {
  constructor(code, message) {
    super(message);
    this.data = { code, message };
  }
}

const InternalError = {
  code: 500,
  message: "Internal server error",
};

module.exports = { InternalError, ValidationError };
