export default class ParkingLot {

    constructor(capacity, number, parkedCars) {
        this.number = number;
        this.capacity = capacity;
        this.occupied = 0;
        this.parkedCars = parkedCars || [];
    }

    isAvailable() {
        return !!(this.capacity - this.occupied);
    }

    findCar(car) {
        let parkedCars = this.parkedCars;
        for (let carNumber in parkedCars) {
            if (parkedCars[carNumber].number === car.number) {
                return parkedCars[carNumber];
            }
        }
        return false;
    }

}

