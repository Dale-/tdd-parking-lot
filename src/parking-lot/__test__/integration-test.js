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

    describe('Park:', () => {

        describe('Can Park', () => {

            describe('Only one parking lot can available:', () => {

                it('when the capacity is 10 and occupied is 10 for parking lot one ,' +
                    'the capacity is 10 and occupied is 9 for parking lot two, ' +
                    'one car can park in parking lot two', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotTwo.occupied = 9;

                    parkingBoy.park(car);

                    expect(parkingLotTwo.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotTwo)).toBeTruthy();

                });

                it('when the capacity is 10 and occupied is 10 for parking lot one ,' +
                    'the capacity is 10, occupied is 10 and leave one car for parking lot two, ' +
                    'one car can park in parking lot two', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotTwo.occupied = 10;
                    parkingBoy.leave(car, parkingLotTwo);

                    parkingBoy.park(car);

                    expect(parkingLotTwo.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotTwo)).toBeTruthy();

                });

                it('when the capacity is 10 and occupied is 9 for parking lot one ,' +
                    'the capacity is 10, occupied is 9 and park one car for parking lot two, ' +
                    'one car can park in parking lot one', () => {

                    parkingLotOne.occupied = 9;
                    parkingLotTwo.occupied = 9;
                    parkingLotTwo.addCar(car);

                    parkingBoy.park(car);

                    expect(parkingLotOne.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotOne)).toBeTruthy();

                });

                it('when the capacity is 10 and occupied is 10 and leave one for parking lot one ,' +
                    'the capacity is 10, occupied is 9 and park one car for parking lot two, ' +
                    'one car can park in parking lot one', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotOne.removeCar(car);
                    parkingLotTwo.occupied = 9;
                    parkingLotTwo.addCar(car);

                    parkingBoy.park(car);

                    expect(parkingLotOne.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotOne)).toBeTruthy();
                });
            });

            describe('More than one parking lot can available:', () => {

                it('when the capacity is 10 and occupied is 9 for parking lot one ,' +
                    'the capacity is 10 and occupied is 9 for parking lot two, ' +
                    'then one car will park in parking lot one', () => {

                    parkingLotOne.occupied = 9;
                    parkingLotTwo.occupied = 9;

                    parkingBoy.park(car);

                    expect(parkingLotOne.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotOne)).toBeTruthy();
                });

                it('when the capacity is 10, occupied is 10 and leave one for parking lot one ,' +
                    'the capacity is 10 and occupied is 9 for parking lot two, ' +
                    'then one car will park in parking lot one', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotOne.removeCar(car);
                    parkingLotTwo.occupied = 9;

                    parkingBoy.park(car);

                    expect(parkingLotOne.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotOne)).toBeTruthy();
                });

                it('when the capacity is 10, occupied is 8 and park one for parking lot one ,' +
                    'the capacity is 10 and occupied is 9 for parking lot two, ' +
                    'then one car will park in parking lot one', () => {

                    parkingLotOne.occupied = 8;
                    parkingLotOne.addCar(car);
                    parkingLotTwo.occupied = 9;
                    car.number = '0002';
                    parkingBoy.park(car);

                    expect(parkingLotOne.occupied).toEqual(10);
                    expect(parkingLotOne.findCar(car).number).toEqual('0002');
                });

                it('when the capacity is 10, occupied is 8 and park one for parking lot one ,' +
                    'the capacity is 10, occupied is 10 and leave one for parking lot two, ' +
                    'then one car will park in parking lot one', () => {

                    parkingLotOne.occupied = 8;
                    parkingLotOne.addCar(car);
                    parkingLotTwo.occupied = 10;
                    parkingLotOne.removeCar(car);

                    parkingBoy.park(car);

                    expect(parkingLotOne.occupied).toEqual(9);
                    expect(parkingLotOne.findCar(car).number).toEqual('DEV326');
                });
            });
        });
    });
});

