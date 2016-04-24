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
            ParkingBoy.parkToParkingLot(car, parkingLot);
            return 'success';
        }
        return 'false';
    }

    static parkToParkingLot(car, parkingLot) {
        car.parked = true;
        parkingLot.parkedCars.push(car);
        parkingLot.occupied++;
    }

    static findCarByParkingLot(car, parkingLot) {
        return parkingLot.findCar(car);
    }


}

