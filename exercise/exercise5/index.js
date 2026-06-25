// Arrow function with parameter

const add = (name, price, quantity) =>{
  return `${name}: $${price+quantity}`
}
console.log(add("maxamed", 12, 13))

// Arrow function no parameter

const adding = ()=>{
  console.log("salaam maxamed")
}
adding()