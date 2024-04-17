import {sum} from '../sum';

test("Sum function should calculate sum of two operators", () => {
    const result = sum(1,2);

    //Assertion
    expect(result).toBe(3);
});

