import { Calificacion } from './calificacion';
import { Servicio } from './servicio';

export class Actividad extends Servicio {
    tipoActividad: String;
    duracion: number;
    nivelDificultad: String;
    precio: number;
    requerimientos: string[];
    capacidadMaxima: number;
    ubicacionLatitud: number;
    ubicacionLongitud: number;
    nombreUbicacion: string;

    constructor(
        idServicio: number,
        idUsuario: number,
        nombre: string,
        descripcion: string,
        estado: String,
        foto: Uint8Array,
        fotosDescripcion: Uint8Array[],
        calificaciones: Calificacion[],
        tipoActividad: String,
        duracion: number,
        nivelDificultad: String,
        precio: number,
        requerimientos: string[],
        capacidadMaxima: number,
        ubicacionLatitud: number,
        ubicacionLongitud: number,
        nombreUbicacion: string
    ) {
        super(idServicio, idUsuario, nombre, descripcion, estado, foto, fotosDescripcion, calificaciones);
        this.tipoActividad = tipoActividad;
        this.duracion = duracion;
        this.nivelDificultad = nivelDificultad;
        this.precio = precio;
        this.requerimientos = requerimientos;
        this.capacidadMaxima = capacidadMaxima;
        this.ubicacionLatitud = ubicacionLatitud;
        this.ubicacionLongitud = ubicacionLongitud;
        this.nombreUbicacion = nombreUbicacion;
    }
}
