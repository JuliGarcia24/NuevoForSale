import { Empleado } from "../../src/main/Empleado";
import { CriterioRanking } from "./CriterioRanking";

export class CriterioCantOperacionesCerradas implements CriterioRanking{
    
    mejorEmpleado(empleados: Empleado[]): Empleado {
        throw new Error("Method not implemented.");
    }
    
}