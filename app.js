let radius=parseFloat(prompt("Enter Radius:"));
let diameter=2 * radius;
let circumference=2 * Math.PI * radius;
let area=Math.PI*radius*radius;
console.log(`Diameter is: ${diameter.toFixed(2)}`);
console.log(`Circumference is: ${circumference.toFixed(2)}`);
console.log(`Area is: ${area.toFixed(2)}`);