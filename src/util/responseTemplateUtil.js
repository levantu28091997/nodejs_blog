module.exports = {
    jsonError(message = '', status = 'ERR', code = 401) {
        return this.json({
            error: true,
            message,
            status,
            code,
        });
    },

    jsonSuccess(data = [], status = 'OK', code = 200) {
        return this.json({
            status,
            data,
            code,
        });
    },

    jsonSuccessNoContent(status = 'OK', code = 204) {
        return this.json({
            status,
            code,
        });
    },
};
