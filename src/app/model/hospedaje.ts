import { Calificacion } from './calificacion';
import { Servicio } from './servicio';

export class Hospedaje extends Servicio {
    tipoHospedaje: String;
    capacidadMaxima: number;
    dias: number;
    noches: number;
    horaCheckOut: string; // LocalTime en Java se traduce a string en TypeScript (formato HH:mm)
    serviciosIncluidos: string[];
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
        tipoHospedaje: String,
        capacidadMaxima: number,
        dias: number,
        noches: number,
        horaCheckOut: string,
        serviciosIncluidos: string[],
        ubicacionLatitud: number,
        ubicacionLongitud: number,
        nombreUbicacion: string
    ) {
        super(idServicio, idUsuario, nombre, descripcion, estado, foto, fotosDescripcion, calificaciones);
        this.tipoHospedaje = tipoHospedaje;
        this.capacidadMaxima = capacidadMaxima;
        this.dias = dias;
        this.noches = noches;
        this.horaCheckOut = horaCheckOut;
        this.serviciosIncluidos = serviciosIncluidos;
        this.ubicacionLatitud = ubicacionLatitud;
        this.ubicacionLongitud = ubicacionLongitud;
        this.nombreUbicacion = nombreUbicacion;
    }
}
