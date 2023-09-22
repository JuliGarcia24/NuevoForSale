import { Empleado } from "../../src/main/Empleado";
import { CriterioRanking } from "./CriterioRanking";

export class CriterioComision implements CriterioRanking{
    
    
    mejorEmpleado(empleados: Empleado[]): Empleado {
        empleados.sort((e1, e2) => e1.getComisiones() === e2.getComisiones() ? 0: e1.getComisiones() > e2.getComisiones() ? -1: 1);
        return empleados[0];
    }


    // mejorEmpleado(empleados: Empleado[]): Empleado {
    //     let empleadoMasComision: Empleado = empleados[0];
    //     let comisionMasAlta: number = 0;

    //     empleados.forEach(empleado => {
    //         if(empleado.getComisiones() > comisionMasAlta){
    //             empleadoMasComision = empleado;
    //             comisionMasAlta = empleado.getComisiones();
    //         }
    //     });

    //     return empleadoMasComision;
    // }
    

}