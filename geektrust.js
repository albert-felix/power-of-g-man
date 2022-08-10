const calculateGPower = require("./calculateGPower");

try {
  const filename = process.argv[2];
  const gPower = calculateGPower(filename);
  console.log(gPower);
} catch (e) {
  console.log("error", e);
}
