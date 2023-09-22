import { Cliente } from "../../Cliente";
import { Empleado } from "../../Empleado";
import { EstadoOperacion } from "./EstadoOperacion";
import { Operacion } from "../Operacion";
export class Concretada extends EstadoOperacion {

    private empleadoQueConcreto: Empleado

    constructor(empleado: Empleado, operacion: Operacion) {
        super();
        this.empleadoQueConcreto = empleado;
        empleado.agregarOperacionConcretada(operacion);
    }
    
    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede reservar porque ya fue concretado");
    }


    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede volver a concretar porque ya está concretado");
    }

    public fueConcluida(): boolean {
        return true;
    }
    
}