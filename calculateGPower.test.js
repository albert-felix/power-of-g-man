const calculateGPower = require("./calculateGPower");

describe('Test case for Power of G-Man', () => {
    test('Test for input_1', () => {
        const filename = 'sample_input/input1.txt';
        const result = calculateGPower(filename);
        expect(result).toBe("POWER 155")
    });
  
    test('Test for input_2', () => {
        const filename = 'sample_input/input2.txt';
        const result = calculateGPower(filename);
        expect(result).toBe("POWER 90")
    });

    test('Test for input_3', () => {
        const filename = 'sample_input/input3.txt';
        const result = calculateGPower(filename);
        expect(result).toBe("POWER 115")
    });

    test('Test for input_4', () => {
        const filename = 'sample_input/input4.txt';
        const result = calculateGPower(filename);
        expect(result).toBe("POWER 170")
    });

  });
