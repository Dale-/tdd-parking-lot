import ParkingLot from './parking-lot';

export default class ParkingBoy {

    constructor(parkingLots) {
        this.parkingLots = parkingLots || [];
    }

    findParkingSpace() {
        let parkingLots = this.parkingLots;
        for (let index in parkingLots) {
            if (parkingLots[index].isAvailable()) {
                return parkingLots[index];
            }
        }
        return false;
    }

    park(car) {
        let parkingLot = this.findParkingSpace();
        if (parkingLot) {
            parkingLot.addCar(car);
            return 'success';
        }
        return 'fail';
    }

    leave(car, parkingLot) {
        if (parkingLot.findCar(car)) {
            parkingLot.removeCar(car);
            return 'success';
        } else if (this.findParkingLot(car)) {
            return 'other parking lot';
        }
        return 'fail';
    }

    static findCarByParkingLot(car, parkingLot) {
        return parkingLot.findCar(car);
    }

    findParkingLot(car) {
        let parkingLots = this.parkingLots;
        for (let index in parkingLots) {
            if (ParkingBoy.findCarByParkingLot(car, parkingLots[index])) {
                return parkingLots[index];
            }
        }
        return false;
    }


}

