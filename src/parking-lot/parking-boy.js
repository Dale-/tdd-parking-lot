import ParkingLot from './parking-lot';

export default class ParkingBoy {

    constructor(parkingLots) {
        this.parkingLots = parkingLots || [];
    }

    findParkingSpace() {
        let parkingLots = this.parkingLots;
        for (var index in parkingLots) {
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
        return 'false';
    }

    leave(car, parkingLot) {
        parkingLot.removeCar(car);
        return 'success';
    }

    static findCarByParkingLot(car, parkingLot) {
        return parkingLot.findCar(car);
    }


}

