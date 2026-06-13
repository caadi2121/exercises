let car = {
  name: "BMW",
  model: "f9001",
  year: 2026
};
console.log(car);

car.start = function(){
  return this.name+": the car has started"
}
console.log(car.start())
console.log(car)
