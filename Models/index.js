const { People } = require('../Components/client');
const Client = require('./client');

class Model {
    constructor() {
        this.people = new People();
    }
}

module.exports = Model;



