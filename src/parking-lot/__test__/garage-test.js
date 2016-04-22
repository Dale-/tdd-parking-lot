import Car from '../car';
import Garage from '../garage';

describe('Class Garage', () => {

    let car;
    let garage;

    beforeEach(() => {
        car = new Car('DEV326');
        garage = new Garage(200);
    });

    describe('.getAvailable: ', () => {

        it('the garage can accommodate 200 and occupied 100 , getAvailable should return 100', () => {
            garage.occupied = 100;
            let result = garage.getAvailable();
            expect(result).toEqual(100);
        });
    });

    describe('.findCar: ', () => {

        it('if one car already in garage ,findCar should return true', () => {
            car.park(garage);
            let result = garage.findCar(car);
            expect(result).toEqual(true);
        });

        it('if one car not in garage ,findCar should return false', () => {
            let result = garage.findCar(car);
            expect(result).toEqual(false);
        });

    });
});

