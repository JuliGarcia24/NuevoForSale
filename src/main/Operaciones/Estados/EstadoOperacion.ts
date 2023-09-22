import { Empleado } from '../../Empleado';
import { Cliente } from '../../Cliente';
import { Operacion } from "../Operacion";

export abstract class EstadoOperacion {

    public abstract reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void;

    public abstract concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void;

    public abstract fueConcluida(): boolean;
}