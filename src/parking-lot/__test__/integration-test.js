import Car from '../car';
import ParkingLot from '../parking-lot';
import ParkingBoy from '../parking-boy'

describe('Class Parking Lot', () => {

    let car;
    let parkingBoy;
    let parkingLotOne;
    let parkingLotTwo;

    beforeEach(() => {
        car = new Car('DEV326');
        parkingLotOne = new ParkingLot(10, '0001');
        parkingLotTwo = new ParkingLot(10, '0002');
        parkingBoy = new ParkingBoy([parkingLotOne, parkingLotTwo]);
    });

    describe('One car want to park into parking lot', () => {

        describe('One car can park into parking lot', () => {

            describe('Just one parking lot have parking spaces', () => {

                it('when the capacity is 10 and occupied is 10 for parking lot one ,' +
                    'the capacity is 10 and occupied is 9 for parking lot two, ' +
                    'one car can park in parking lot two', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotTwo.occupied = 9;

                    let parkingLot = parkingBoy.findParkingSpace();
                    parkingBoy.park(car, parkingLot);

                    expect(parkingLotTwo.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotTwo)).toBeTruthy();

                });

                it('when the capacity is 10 and occupied is 10 for parking lot one ,' +
                    'the capacity is 10, occupied is 10 and leave one car for parking lot two, ' +
                    'one car can park in parking lot two', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotTwo.occupied = 10;
                    parkingBoy.leave(car, parkingLotTwo);

                    let parkingLot = parkingBoy.findParkingSpace();
                    parkingBoy.park(car, parkingLot);

                    expect(parkingLotTwo.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotTwo)).toBeTruthy();

                });
            });
        });
    });
});

