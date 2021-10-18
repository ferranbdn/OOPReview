export class Mobile {
    public name: string;
    public model: string;
    public trademark: string;
    public sdSize: number;
    public color: string;
    public is5G: boolean;
    public cameraNumber: number;
    public price: number;

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
}