import Car from '../car';
import ParkingLot from '../parking-lot';

describe('Class Parking Lot', () => {

    let car;
    let parkingLot;

    beforeEach(() => {
        car = new Car('DEV326');
        parkingLot = new ParkingLot(10, '0001');
    });

    describe('#isAvaible()', () => {

        it('the garage can accommodate 10 and occupied 9 , isAvailable should return true', () => {
            parkingLot.occupied = 9;
            let result = parkingLot.isAvailable();
            expect(result).toEqual(true);
        });

        it('the garage can accommodate 10 and occupied 10 , isAvailable should return false', () => {
            parkingLot.occupied = 10;
            let result = parkingLot.isAvailable();
            expect(result).toEqual(false);
        });
    });

    describe('#findCar()', () => {

        it('if one car already in parking lot ,findCar should return true', () => {
            parkingLot.parkedCars.push(car);
            let result = parkingLot.findCar(car);
            expect(result.number).toEqual(car.number);
        });

        it('if one car not in parking lot ,findCar should return false', () => {
            let result = parkingLot.findCar(car);
            expect(result).toEqual(false);
        });

    });
});

