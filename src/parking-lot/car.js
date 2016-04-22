export default class Car {

    constructor(number) {
        this.number = number;
        this.parked = false;
    }

    park(garage) {
        if(!!garage.getAvailable() && !this.parked) {
            this.parked = true;
            return 'success';
        } else {
            return 'fail';
        }
    }

}

