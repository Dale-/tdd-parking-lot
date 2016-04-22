export default class Car {

    constructor(number) {
        this.number = number;
        this.parked = false;
    }

    park(garage) {
        if (!!garage.getAvailable() && !this.parked) {
            this.parked = true;
            garage.parkedCars.push(this);
            return 'success';
        } else {
            return 'fail';
        }
    }

    leave(garage) {
        return garage.findCar(this) ? 'success' : 'fail';
    }

}

