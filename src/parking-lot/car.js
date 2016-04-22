export default class Car {

    constructor(number) {
        this.number = number;
        this.parked = false;
    }

    park(garage) {
        if (garage.isAvailable() && !this.parked) {
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

