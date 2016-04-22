import Car from '../car';
import Garage from '../garage';

describe('Class Garage', () => {

    let car;
    let garage;

    beforeEach(() => {
        car = new Car('DEV326');
        garage = new Garage(200);
    });

    describe('#isAvailable()', () => {

        it('the garage can accommodate 200 and occupied 100 , isAvailable should return true', () => {
            garage.occupied = 100;
            let result = garage.isAvailable();
            expect(result).toEqual(true);
        });

        it('the garage can accommodate 200 and occupied 200 , isAvailable should return false', () => {
            garage.occupied = 200;
            let result = garage.isAvailable();
            expect(result).toEqual(false);
        });
    });

    describe('#findCar()', () => {

        it('if one car already in garage ,findCar should return true', () => {
            car.park(garage);
            let result = garage.findCar(car);
            expect(result.number).toEqual(car.number);
        });

        it('if one car not in garage ,findCar should return false', () => {
            let result = garage.findCar(car);
            expect(result).toEqual(false);
        });

    });
});

