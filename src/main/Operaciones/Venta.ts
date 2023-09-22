import { Operacion } from "./Operacion";

export class Venta extends Operacion {
    private static porcentajeComision: number = 1.5;

    public static setPorcentajeComision(porcentaje: number) {
        Venta.porcentajeComision = porcentaje;
    }

    public comision(): number {
        return this.inmuble.precioFinal() * Venta.porcentajeComision;
    }
}