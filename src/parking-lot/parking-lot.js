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

    findCarIndex(car) {
        let parkedCars = this.parkedCars;
        for (let carNumber in parkedCars) {
            if (parkedCars[carNumber].number === car.number) {
                return carNumber;
            }
        }
        return false;
    }


    removeCar(car) {
        this.parkedCars.splice(this.findCarIndex(car),1);
        this.occupied --;
        car.parked = false;
    }

    addCar(car) {
        this.parkedCars.push(car);
        this.occupied ++;
        car.parked = true;
    }

}

