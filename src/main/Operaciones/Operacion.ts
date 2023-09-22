import { Publicada } from './Estados/Publicada';
import { Empleado } from '../Empleado';
import { Cliente } from '../Cliente';
import { Inmueble } from "../Inmuebles/Inmueble";
import { EstadoOperacion } from './Estados/EstadoOperacion';

export abstract class Operacion {
    protected inmuble: Inmueble;
    private estado: EstadoOperacion;

    constructor() {
        this.estado = new Publicada();
    }

    public setEstado(estado: EstadoOperacion) {
        this.estado = estado;
    }

    public abstract comision(): number;

    public reservar(cliente: Cliente, empleado: Empleado) {
        this.estado.reservar(cliente, empleado, this);
    }

    public concretar(cliente: Cliente, empleado: Empleado) {
        this.estado.concretar(cliente, empleado, this);
    }
}