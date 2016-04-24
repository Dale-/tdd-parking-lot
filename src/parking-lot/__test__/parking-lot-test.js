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

    describe('#addCar()', () => {

        it('when the car want to park in parking lot, we should add the car in parking lot', () => {
            parkingLot.addCar(car);
            expect(car.parked).toBeTruthy();
            expect(parkingLot.parkedCars.length).toEqual(1);
            expect(parkingLot.occupied).toEqual(1);
        });
    });

    describe('#removeCar()', () => {

        it('when the car leave the parking lot , the occupied should reduce one and the parkedCars should reduce', () => {
            parkingLot.addCar(car);
            parkingLot.removeCar(car);
            expect(car.parked).toBeFalsy();
            expect(parkingLot.parkedCars.length).toEqual(0);
            expect(parkingLot.occupied).toEqual(0);
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

