process.argv = ['', '', 'sample_input/input1.txt'];
const gPower = require("./geektrust");

describe('Test case for Power of G-Man', () => {
    test('Test for input_1', () => {
        const result = gPower();
        expect(result).toBe("POWER 155")
    });
  
    test('Test for input_2', () => {
        process.argv = ['', '', 'sample_input/input2.txt'];
        const result = gPower();
        expect(result).toBe("POWER 90")
    });

    test('Test for input_3', () => {
        process.argv = ['', '', 'sample_input/input3.txt'];
        const result = gPower();
        expect(result).toBe("POWER 110")
    });

  });