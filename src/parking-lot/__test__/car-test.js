import Car from '../car';
import Garage from '../garage';

describe('Class Car', () => {

    let car;
    let garage;

    beforeEach(() => {
        car = new Car('DEV326');
        garage = new Garage(200);
    });

    describe('#park()', () => {

        it('if have parking lot then one car into garage can park and should return success', () => {
            let result = car.park(garage);
            expect(result).toEqual('success');
        });

        it('if no parking lot then one car into garage can park and should return fail', () => {
            garage.occupied = 200;
            let result = car.park(garage);
            expect(result).toEqual('fail');
        });

        it('one car into garage can park and should return fail if this car has parked', () => {
            car.parked = true;
            let result = car.park(garage);
            expect(result).toEqual('fail');
        });
    });

    describe('#leave()', () => {

        it('one car leave garage should return success if the car already in garage', () => {
            car.park(garage);
            let result = car.leave(garage);
            expect(result).toEqual('success');
        });

        it('one car leave garage should return success if the car not in garage', () => {
            let result = car.leave(garage);
            expect(result).toEqual('fail');
        });
    });
});

