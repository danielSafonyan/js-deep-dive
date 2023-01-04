// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const allCarWeightSum = cars.reduce((accum, el) => accum + el.weight, 0)
console.log("allCarWeightSum", allCarWeightSum)

const eCarWeightSum = cars.reduce((accum, cur) => cur.isElectric ? cur.weight : 0, 0)
console.log("eCarWeightSum", eCarWeightSum)


// With .reduce you can also create new arrays
const numbers = [1, 2, 3, 4, 5, 6];

const doubledArray = numbers.reduce((accum, cur) => [...accum, cur * 2], [])
console.log("doubledArray", doubledArray)
