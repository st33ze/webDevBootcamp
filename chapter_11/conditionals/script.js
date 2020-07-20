let age = prompt("What is your age?");

if (age < 0) alert("Invalid age.");
if (age == 21) alert("Happy 21 birthday!");
if (age % 2 !== 0) alert("Your age is odd");
if (age % Math.sqrt(age) === 0) alert("Perfect square!");