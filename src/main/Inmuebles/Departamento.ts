import { Inmueble } from "./Inmueble";

export class Departamento extends Inmueble {

    public precio(): number {
        return 350000 * this.cantAmbientes;
    }
}