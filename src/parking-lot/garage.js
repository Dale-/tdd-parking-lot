export default class Garage {

    constructor(capacity) {
        this.capacity = capacity;
        this.occupied = 0;
        this.parkedCar = [];
    }

    getAvailable() {
        return this.capacity - this.occupied;
    }

}

