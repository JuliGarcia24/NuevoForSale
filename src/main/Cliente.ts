import { Empleado } from './Empleado';
import { Inmueble } from "./Inmuebles/Inmueble";

export class Cliente {
    private nombre: string;

    public reservar(inmueble: Inmueble, empleado: Empleado) {
        inmueble.getOperacion().reservar(this, empleado);
    }

    public concretar(inmueble: Inmueble, empleado: Empleado) {
        inmueble.getOperacion().concretar(this, empleado);
    }
}