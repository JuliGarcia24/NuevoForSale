import { Empleado } from './../src/main/Empleado';
import { CriterioRanking } from './Criterios/CriterioRanking';
export class RankingEmpleados{
    private criterio: CriterioRanking;

    public setCriterio(criterio: CriterioRanking){
        this.criterio = criterio;
    }

    public mejorEmpleado(empleados: Empleado[]): Empleado{
        return this.criterio.mejorEmpleado(empleados);    
    }
}