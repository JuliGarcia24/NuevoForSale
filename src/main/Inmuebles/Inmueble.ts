import { Operacion } from '../Operaciones/Operacion';
import { Zona } from './Zona';

export abstract class Inmueble {
    protected metros2: number;
    protected cantAmbientes: number;
    private zona: Zona;
    private operacion: Operacion;


    public getOperacion(): Operacion {
        return this.operacion;
    }

    public setZona(zona: Zona) {
        this.zona = zona;
    }

    public getZona(): Zona {
        return this.zona;
    }

    public precioFinal(): number {
        return this.precio() + this.zona.getValor();
    }

    protected abstract precio(): number;
}