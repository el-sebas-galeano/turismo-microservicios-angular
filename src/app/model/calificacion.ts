import { Servicio } from './servicio';

export class Calificacion {
    idCalificacion: number;
    titulo: string;
    descripcion: string;
    reputacion: number;
    servicio: Servicio;

    constructor(
        idCalificacion: number,
        titulo: string,
        descripcion: string,
        reputacion: number,
        servicio: Servicio
    ) {
        this.idCalificacion = idCalificacion;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.reputacion = reputacion;
        this.servicio = servicio;
    }
}
