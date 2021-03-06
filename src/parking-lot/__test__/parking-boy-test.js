import Car from '../car';
import ParkingLot from '../parking-lot';
import ParkingBoy from '../parking-boy'

describe('Class ParkingBoy', () => {

    let car;
    let parkingLotOne;
    let parkingLotTwo;
    let parkingBoy;

    beforeEach(() => {
        car = new Car('DEV326');
        parkingLotOne = new ParkingLot(10, '0001');
        parkingLotTwo = new ParkingLot(10, '0002');
        parkingBoy = new ParkingBoy([parkingLotOne, parkingLotTwo]);
    });

    describe('#findParkingSpace()', () => {

        it('when the some parking lot have parking space should return the first parking lot', () => {
            let result = parkingBoy.findParkingSpace();
            expect(result.number).toEqual('0001');
        });

        it('when the all parking lot have not  parking space should return false', () => {
            parkingLotOne.occupied = 10;
            parkingLotTwo.occupied = 10;
            let result = parkingBoy.findParkingSpace();
            expect(result).toBeFalsy();
        });
    });

    describe('#park()', () => {

        it('when the car park in parking lot one , we should find the car in parking lot one', () => {
            var result = parkingBoy.park(car, parkingLotOne);
            expect(result).toEqual('success');
        });
    });

    describe('#leave()', () => {

        it('when the car park already in parking lot one , we can leave from the parking lot one', () => {
            parkingBoy.park(car, parkingLotOne);
            var result = parkingBoy.leave(car, parkingLotOne);
            expect(result).toEqual('success');
            expect(parkingLotOne.findCar(car)).toBeFalsy();
        });
    });
});

