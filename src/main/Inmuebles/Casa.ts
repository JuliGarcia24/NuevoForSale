import { Inmueble } from "./Inmueble";

export class Casa extends Inmueble {
    
    private valor: number;

    public setValor(valor: number) {
        this.valor = valor;
    }

    public getValor(): number {
        return this.valor;
    }

    protected precio(): number {
       return this.valor;
    }

}