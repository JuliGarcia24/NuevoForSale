import { Concretada } from './Concretada';
import { Cliente } from "../../Cliente";
import { Empleado } from "../../Empleado";
import { EstadoOperacion } from "./EstadoOperacion";
import { Operacion } from "../Operacion";

export class Reservada extends EstadoOperacion {
    private clienteQueReservo: Cliente;
    private empleadoQueReservo: Empleado;

    constructor(cliente: Cliente, empleado: Empleado, operacion: Operacion) {
        super();
        this.clienteQueReservo = cliente;
        this.empleadoQueReservo = empleado;
        empleado.agregarOperacionReservada(operacion);
    }

    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede volver a reservar.");
    }

    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        if(this.clienteQueReservo === cliente) {
            operacion.setEstado(new Concretada(empleado, operacion));
        }
        else {
            throw new Error("No se puede concretar porque el cliente no es el mismo que lo reservó");
        }
    }

    public fueConcluida(): boolean {
        return false;
    }
    
}