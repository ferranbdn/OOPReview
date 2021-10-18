"use strict";
exports.__esModule = true;
var repasoFundamentos2_1 = require("./repasoFundamentos2");
var Nokia3210 = new repasoFundamentos2_1.Mobile("Nokia 3210", "3210", "Nokia", 0, "Azul", false, 0, 60);
var iPhone3G = new repasoFundamentos2_1.Mobile("iPhone 3G", "3G", "iPhone", 64, "Negro", false, 2, 400);
var SamsungGalaxy10 = new repasoFundamentos2_1.Mobile("Samsung Galaxy 10", "10", "Samsung Galaxy", 128, "Blanco", true, 4, 700);
console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);
Nokia3210.set5g(true);
Nokia3210.setCamera(4);
console.log(Nokia3210);
var arrayMoviles = [Nokia3210, iPhone3G, SamsungGalaxy10];
Nokia3210.printAll();
iPhone3G.printAll();
SamsungGalaxy10.printAll();