export class Mobile {
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor(name: string, model: string, trademark: string, sdSize: number,
        color: string, is5G: boolean, cameraNumber: number, price: number) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    setName(nombre: string) {
        this.name = nombre;
    }
    getName(): string {
        return this.name;
    }
    setModel(modelo: string) {
        this.name = modelo;
    }
    getModel(): string {
        return this.model;
    }
    setTrade(marca: string) {
        this.trademark = marca;
    }
    getTrade(): string {
        return this.trademark;
    }
    setsdSize(sd: number) {
        this.sdSize = sd;
    }
    getsdSize(): number {
        return this.sdSize;
    }
    setColor(color: string) {
        this.color = color;
    }
    getcolor(): string {
        return this.color;
    }
    set5g(cincoG: boolean) {
        this.is5G = cincoG;
    }
    get5g(): boolean {
        return this.is5G;
    }
    setCamera(camera: number) {
        this.cameraNumber = camera;
    }
    getCamera(): number {
        return this.cameraNumber;
    }
    setPrice(precio: number) {
        this.price = precio;
    }
    getPrice(): number {
        return this.price;
    }
    printAll() {
        console.log("The characteristics of the mobile " + this.name + " are:" + "\n" +
            "• Name" + ": " + this.name + "\n" +
            "• Model: " + this.model + "\n" +
            "• Trademark: " + this.trademark + "\n" +
            "• SD Size (GB): " + this.sdSize + "\n" +
            "• Color: " + this.color + "\n" +
            "• Is 5G?: " + this.is5G + "\n" +
            "• Number of Cameras: " + this.cameraNumber)
    }
}