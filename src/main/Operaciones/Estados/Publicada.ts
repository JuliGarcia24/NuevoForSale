import { Concretada } from './Concretada';
import { Reservada } from './Reservada';
import { Cliente } from "../../Cliente";
import { Empleado } from "../../Empleado";
import { EstadoOperacion } from "./EstadoOperacion"
import { Operacion } from "../Operacion";

export class Publicada extends EstadoOperacion  {

    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        operacion.setEstado(new Reservada(cliente, empleado, operacion));
    }

    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        operacion.setEstado(new Concretada(empleado, operacion));
    }

    public fueConcluida(): boolean {
        return false;
    }

}