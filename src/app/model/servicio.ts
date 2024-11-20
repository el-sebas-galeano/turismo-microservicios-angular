import { Calificacion } from "./calificacion";

export abstract class Servicio {
    idServicio: number;
    nombre: string;
    descripcion: string;
    estado: String;
    foto: Uint8Array; // byte[] en Java se traduce a Uint8Array en TypeScript
    fotosDescripcion: Uint8Array[];
    calificaciones: Calificacion[];

    constructor(
        idServicio: number,
        nombre: string,
        descripcion: string,
        estado: String,
        foto: Uint8Array,
        fotosDescripcion: Uint8Array[],
        calificaciones: Calificacion[]
    ) {
        this.idServicio = idServicio;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.foto = foto;
        this.fotosDescripcion = fotosDescripcion;
        this.calificaciones = calificaciones;
    }
}
