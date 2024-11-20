import { Calificacion } from './calificacion';
import { Servicio } from './servicio';

export class Voluntariado extends Servicio {
    objetivo: string;
    duracion: number;
    actividades: string[];
    requerimientos: string[];
    ubicacionLatitud: number;
    ubicacionLongitud: number;
    nombreUbicacion: string;
    costo: number;
    beneficios: string[];

    constructor(
        idServicio: number,
        idUsuario: number,
        nombre: string,
        descripcion: string,
        estado: String,
        foto: Uint8Array,
        fotosDescripcion: Uint8Array[],
        calificaciones: Calificacion[],
        objetivo: string,
        duracion: number,
        actividades: string[],
        requerimientos: string[],
        ubicacionLatitud: number,
        ubicacionLongitud: number,
        nombreUbicacion: string,
        costo: number,
        beneficios: string[]
    ) {
        super(idServicio, idUsuario, nombre, descripcion, estado, foto, fotosDescripcion, calificaciones);
        this.objetivo = objetivo;
        this.duracion = duracion;
        this.actividades = actividades;
        this.requerimientos = requerimientos;
        this.ubicacionLatitud = ubicacionLatitud;
        this.ubicacionLongitud = ubicacionLongitud;
        this.nombreUbicacion = nombreUbicacion;
        this.costo = costo;
        this.beneficios = beneficios;
    }
}
