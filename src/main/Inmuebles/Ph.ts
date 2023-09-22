import { Inmueble } from "./Inmueble";

export class PH extends Inmueble {

    protected precio(): number {
        return 14000 * this.metros2;
    }
}