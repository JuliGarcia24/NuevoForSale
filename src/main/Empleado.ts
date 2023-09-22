import { Zona } from './Inmuebles/Zona';
import { Operacion } from "./Operaciones/Operacion";

export class Empleado {
    private operaciones: Operacion[];
    private cantOperacionesCerradas: number = 0;
    private cantOperacionesReservadas: number = 0;
    private comisiones: number = 0;

    constructor(){
        this.operaciones = [];
    }

    public getCantOperacionesCerradas(): number{
        return this.cantOperacionesCerradas;
    }

    public getCantOperacionesReservadas(): number{
        return this.cantOperacionesReservadas;
    }

    public getComisiones(): number{
        return this.comisiones;
    }


    public agregarOperacion(operacion: Operacion){
        if(!this.operaciones.includes(operacion))
        this.operaciones.push(operacion);
    }

    public agregarOperacionReservada(operacion: Operacion){
        this.agregarOperacion(operacion);
        this.cantOperacionesReservadas++;
    }

    public agregarOperacionConcretada(operacion: Operacion){
        this.agregarOperacion(operacion);
        this.cantOperacionesCerradas++;
        this.comisiones += operacion.comision();
    }

    public obtenerZonasOperacionesConcluidas(): Zona[]{
        let zonasOperaciones: Zona[] = [];
        this.operaciones.forEach(operacion => {
            if(operacion.getEstado().fueConcluida()){
                zonasOperaciones.push(operacion.getZona());
            }
        });

        return zonasOperaciones;
    }

    public cerrasteOperacionesEnZonaDe(empleado: Empleado): boolean{
        let zonaEmpleado1: Zona[] = this.obtenerZonasOperacionesConcluidas();
        let zonaEmpleado2: Zona[] = empleado.obtenerZonasOperacionesConcluidas(); 

        return zonaEmpleado1.some(zona => zonaEmpleado2.includes(zona));
        
    }

    public primereasteA(empleado: Empleado): boolean{
        return true;
    }

    public vasATenerProblemasCon(empleado:Empleado): boolean{
        return this.cerrasteOperacionesEnZonaDe(empleado) && this.primereasteA(empleado);
    }
}