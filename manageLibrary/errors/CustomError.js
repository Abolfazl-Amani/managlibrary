const AppError = require('./AppError');
const dataError = require('./DataError');

class DB extends AppError {
    constructor() {
        super(
            dataError.db.codeStatus,
            dataError.db.message,
            dataError.db.codeWarning
        )
    }
}

module.exports = {
    DB,
};