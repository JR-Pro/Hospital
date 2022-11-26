
import { Especialidad } from "./especialidad";
import { Medico } from "./medico";
import { Paciente } from "./pacientes";

export class Consulta {
    idConsulta:      number;
    paciente:        Paciente;
    medico:          Medico;
    especialidad:    Especialidad;
    numConsultorio:  string;
    fecha:           Date;
    detalleConsulta: DetalleConsulta[];
}



export interface DetalleConsulta {
    idDetalle:   number;
    diagnostico: string;
    tratamiento: string;
}



// Converts JSON strings to/from your types
// export class Convert {
//     public static toConsulta(json: string): Consulta {
//         return JSON.parse(json);
//     }

//     public static consultaToJson(value: Consulta): string {
//         return JSON.stringify(value);
//     }
// }
