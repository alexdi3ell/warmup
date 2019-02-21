module.exports = function warmup(temperature) {
  // your implementation here
  let rCels = +temperature;
  let rFar = 0;
  rFar = Math.round(9/5*rCels + 32); 
  return rFar;
};