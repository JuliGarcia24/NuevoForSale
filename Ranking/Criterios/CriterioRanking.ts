import { Empleado } from "../../src/main/Empleado";

export interface CriterioRanking{
    mejorEmpleado(empleados: Empleado[]): Empleado;
}