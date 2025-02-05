class APIError extends Error {
    constructor(
        statusCode,
        message = 'Something went wrong',
        errors = [],
        stack = ''
    ) {
        super(message);  // Call the parent class (Error) constructor with message
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;

        // Capture stack trace only if provided, else use default behavior
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { APIError };
