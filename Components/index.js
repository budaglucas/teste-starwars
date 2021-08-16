const component = require('./client')

class Client {
    constructor() {
        const credentials = { server: 'https://swapi.dev' };
        this.people = new component.People(credentials);
    }
}

module.exports = Client;