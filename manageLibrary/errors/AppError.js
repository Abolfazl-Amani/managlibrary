class AppError extends Error {
    constructor(codeStatus, message, code) {
        super(message);
        this.codeStatus = codeStatus;
        this.code = code;
        Error.captureStackTrace(this, AppError);
    }

    toJson() {
        return {
            error: {
                message: this.message,
                code: this.code
            }
        }
    }
}

module.exports = AppError;