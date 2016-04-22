
export default class Car {

    constructor(number) {
        this.number = number;
    }

    park(garage) {
        return !!garage.getAvailable() ? 'success' : 'fail';
    }

}

