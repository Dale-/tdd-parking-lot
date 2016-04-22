export default class Garage {

    constructor(capacity) {
        this.capacity = capacity;
        this.occupied = 0;
        this.parkedCars = [];
    }

    getAvailable() {
        return this.capacity - this.occupied;
    }

    findCar(car) {
        let parkedCars = this.parkedCars;
        for (let carNumber in parkedCars) {
            if(parkedCars[carNumber].number === car.number) {
                return true;
            }
        }
        return false;
    }

}

