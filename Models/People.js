const { People } = require("../Components/client");


class People {
    handle(data) {
        this.data = data;

        return {
            ...this.extractName(),
            ...this.extractFilms(),
            
        }
    }

    extractName() {
        return {
            name: this.data.name
        }
    }

    extractFilms() {
        return {
            name: this.data.name
        }
    }
}


module.exports = People;