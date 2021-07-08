//constant variable kelvin
const kelvin = 0; 
//constant variable celsius
const celsius = kelvin - 273;
//conversion equation
let fahrenheit = celsius * (9 / 5) + 32;
//this removes any decimal 
fahrenheit = Math.floor(fahrenheit);
//this displays the temperature to console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);