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

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
                    expect(parkingLotTwo.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotTwo)).toBeTruthy();

                });

                it('when the capacity is 10 and occupied is 10 for parking lot one ,' +
                    'the capacity is 10, occupied is 10 and leave one car for parking lot two, ' +
                    'one car can park in parking lot two', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotTwo.occupied = 9;
                    parkingBoy.park(car);
                    parkingBoy.leave(car, parkingLotTwo);

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
                    expect(parkingLotTwo.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotTwo)).toBeTruthy();

                });

                it('when the capacity is 10 and occupied is 9 for parking lot one ,' +
                    'the capacity is 10, occupied is 9 and park one car for parking lot two, ' +
                    'one car can park in parking lot one', () => {

                    parkingLotOne.occupied = 9;
                    parkingLotTwo.occupied = 9;
                    parkingLotTwo.addCar(car);

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
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

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
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

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
                    expect(parkingLotOne.occupied).toEqual(10);
                    expect(ParkingBoy.findCarByParkingLot(car, parkingLotOne)).toBeTruthy();
                });

                it('when the capacity is 10, occupied is 10 and leave one for parking lot one ,' +
                    'the capacity is 10 and occupied is 9 for parking lot two, ' +
                    'then one car will park in parking lot one', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotOne.removeCar(car);
                    parkingLotTwo.occupied = 9;

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
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
                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
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

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('success');
                    expect(parkingLotOne.occupied).toEqual(9);
                    expect(parkingLotOne.findCar(car).number).toEqual('DEV326');
                });
            });
        });

        describe('Can not Park', () => {

            describe('No parking lot in all parking lot:', () => {

                it('All parking lot is full, then no one car can park', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotTwo.occupied = 10;

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('fail');
                });

                it('when the capacity is 10, occupied is 10 for parking lot one ,' +
                    'the capacity is 10, occupied is 9 and park one for parking lot two, ' +
                    'then one car will park in parking lot one', () => {

                    parkingLotOne.occupied = 10;
                    parkingLotTwo.occupied = 9;
                    parkingLotTwo.addCar(car);

                    let result = parkingBoy.park(car);

                    expect(result).toEqual('fail');
                });
            });
        });
    });

    describe('Leave:', () => {
        describe('Can Leave', () => {

            it('car in parking lot one, the car can leave from parking lot one', () => {

                parkingBoy.park(car);
                let result = parkingBoy.leave(car, parkingLotOne);
                expect(result).toEqual('success');
            });
        });

        describe('Can Not Leave', () => {

            it('All parking lot have not the car', () => {
                let result = parkingBoy.leave(car, parkingLotOne);
                expect(result).toEqual('fail');
            });

            it('Not in given parking lot', () => {
                parkingBoy.park(car);
                let result = parkingBoy.leave(car, parkingLotTwo);
                expect(result).toEqual('other parking lot');
            });

            it('Just now drive by the master of the car', () => {
                parkingBoy.park(car);
                parkingBoy.leave(car, parkingLotOne);
                let result = parkingBoy.leave(car, parkingLotOne);
                expect(result).toEqual('fail');
            });
        });
    });
});

