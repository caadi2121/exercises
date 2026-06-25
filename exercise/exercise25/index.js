function multiply(...numbers) {
  return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(2, 3));   
console.log(multiply(2, 3, 4)); 
console.log(multiply(2, 3, 4, 5)); 