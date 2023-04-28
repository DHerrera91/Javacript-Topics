let hour = prompt("ingrese la hora en formato de 24 horas");

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good evening!");
}
