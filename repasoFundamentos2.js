"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.setName = function (nombre) {
        this.name = nombre;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setModel = function (modelo) {
        this.name = modelo;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setTrade = function (marca) {
        this.trademark = marca;
    };
    Mobile.prototype.getTrade = function () {
        return this.trademark;
    };
    Mobile.prototype.setsdSize = function (sd) {
        this.sdSize = sd;
    };
    Mobile.prototype.getsdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.set5g = function (cincoG) {
        this.is5G = cincoG;
    };
    Mobile.prototype.get5g = function () {
        return this.is5G;
    };
    Mobile.prototype.setCamera = function (camera) {
        this.cameraNumber = camera;
    };
    Mobile.prototype.getCamera = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setPrice = function (precio) {
        this.price = precio;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.printAll = function () {
        console.log("The characteristics of the mobile " + this.name + " are:" + "\n" +
            "• Name" + ": " + this.name + "\n" +
            "• Model: " + this.model + "\n" +
            "• Trademark: " + this.trademark + "\n" +
            "• SD Size (GB): " + this.sdSize + "\n" +
            "• Color: " + this.color + "\n" +
            "• Is 5G?: " + this.is5G + "\n" +
            "• Number of Cameras: " + this.cameraNumber);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
