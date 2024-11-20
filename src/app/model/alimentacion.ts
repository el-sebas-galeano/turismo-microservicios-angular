import { Calificacion } from './calificacion';
import { Servicio } from './servicio';

export class Alimentacion extends Servicio {
    tipoCocina: String;
    horaMinima: string; // LocalTime en Java se traduce a string en TypeScript (formato HH:mm)
    horaMaxima: string;
    precio: number;
    ubicacionLatitud: number;
    ubicacionLongitud: number;
    nombreUbicacion: string;

    constructor(
        idServicio: number,
        nombre: string,
        descripcion: string,
        estado: String,
        foto: Uint8Array,
        fotosDescripcion: Uint8Array[],
        calificaciones: Calificacion[],
        tipoCocina: String,
        horaMinima: string,
        horaMaxima: string,
        precio: number,
        ubicacionLatitud: number,
        ubicacionLongitud: number,
        nombreUbicacion: string
    ) {
        super(idServicio, nombre, descripcion, estado, foto, fotosDescripcion, calificaciones);
        this.tipoCocina = tipoCocina;
        this.horaMinima = horaMinima;
        this.horaMaxima = horaMaxima;
        this.precio = precio;
        this.ubicacionLatitud = ubicacionLatitud;
        this.ubicacionLongitud = ubicacionLongitud;
        this.nombreUbicacion = nombreUbicacion;
    }
}
