import { Mobile } from "./repasoFundamentos2"

let Nokia3210 = new Mobile("Nokia 3210", "3210", "Nokia", 0, "Azul", false, 0, 60);
let iPhone3G = new Mobile("iPhone 3G", "3G", "iPhone", 64, "Negro", false, 2, 400);
let SamsungGalaxy10 = new Mobile("Samsung Galaxy 10", "10", "Samsung Galaxy", 128, "Blanco", true, 4, 700);

console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);

Nokia3210.set5g(true);
Nokia3210.setCamera(4);
console.log(Nokia3210);