const rq = require('request-promise');

class Request {
    constructor({ server, request_path, extra_path, service_path }) {
        this.server = server;
        this.request_path = '/api';
        this.service_path = service_path;
        this.extra_path = extra_path;
    }

    async execute_request(requestMethod, qs=null, body=null) {
        const url = this.server + this.request_path + this.service_path + this.extra_path
        const params = {
            method: requestMethod,
            url,
            qs,
            body,
            json: true
        };

        this.extra_path = '';

        return await rq(params)
    }
}

class People extends Request {
    constructor(credentials) {
        super(credentials);

        this.request_path = '/people';
    }

   async getbyId(id=null) {
        if (!id) throw new Error('id is required')

        this.extra_path = '/' + id;

        return await this.execute_request('GET');
    }
}

module.exports = People;