import { Venta } from './../main/Operaciones/Venta';
import { Departamento } from '../main/Inmuebles/Departamento';
import { Casa } from '../main/Inmuebles/Casa';
import { PH } from '../main/Inmuebles/Ph';
import { Inmueble } from '../main/Inmuebles/Inmueble';

test("Probando inmuebles", () => {
    //const unInmueble = new Inmueble();

    const unaCasa: Casa = new Casa();

    unaCasa.setValor(80);
    
    expect(unaCasa.precioFinal()).toBe(80);

    const unPh = new PH();

    unPh.precioFinal();

    const unDepto = new Departamento();

    unDepto.precioFinal();

    Venta.setPorcentajeComision(20.5);

    const venta1 = new Venta();

    venta1.comision();

    const venta2 = new Venta();
    venta2.comision();

    Venta.setPorcentajeComision(30.0);
});