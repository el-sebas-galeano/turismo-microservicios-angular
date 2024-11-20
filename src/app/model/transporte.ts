import { Calificacion } from './calificacion';
import { Servicio } from './servicio';

export class Transporte extends Servicio {
    tipoTransporte: String;
    fechaSalida: string; // LocalDateTime en Java se traduce a string en TypeScript (formato ISO)
    fechaLlegada: string;
    capacidad: number;
    costoPorPasajero: number;
    origenLatitud: number;
    origenLongitud: number;
    destinoLatitud: number;
    destinoLongitud: number;

    constructor(
        idServicio: number,
        idUsuario: number,
        nombre: string,
        descripcion: string,
        estado: String,
        foto: Uint8Array,
        fotosDescripcion: Uint8Array[],
        calificaciones: Calificacion[],
        tipoTransporte: String,
        fechaSalida: string,
        fechaLlegada: string,
        capacidad: number,
        costoPorPasajero: number,
        origenLatitud: number,
        origenLongitud: number,
        destinoLatitud: number,
        destinoLongitud: number
    ) {
        super(idServicio, idUsuario, nombre, descripcion, estado, foto, fotosDescripcion, calificaciones);
        this.tipoTransporte = tipoTransporte;
        this.fechaSalida = fechaSalida;
        this.fechaLlegada = fechaLlegada;
        this.capacidad = capacidad;
        this.costoPorPasajero = costoPorPasajero;
        this.origenLatitud = origenLatitud;
        this.origenLongitud = origenLongitud;
        this.destinoLatitud = destinoLatitud;
        this.destinoLongitud = destinoLongitud;
    }
}
