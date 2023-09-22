import { Publicada } from './Estados/Publicada';
import { Empleado } from '../Empleado';
import { Cliente } from '../Cliente';
import { Inmueble } from "../Inmuebles/Inmueble";
import { EstadoOperacion } from './Estados/EstadoOperacion';
import { Zona } from '../Inmuebles/Zona';

export abstract class Operacion {
    protected inmueble: Inmueble;
    private estado: EstadoOperacion;

    constructor() {
        this.estado = new Publicada();
    }

    public setEstado(estado: EstadoOperacion) {
        this.estado = estado;
    }

    public getEstado(): EstadoOperacion{
        return this.estado;
    }

    public getZona(): Zona{
        return this.inmueble.getZona();
    }

    public abstract comision(): number;

    public reservar(cliente: Cliente, empleado: Empleado) {
        this.estado.reservar(cliente, empleado, this);
    }

    public concretar(cliente: Cliente, empleado: Empleado) {
        this.estado.concretar(cliente, empleado, this);
    }
}