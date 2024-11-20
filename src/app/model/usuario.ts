import { Credencial } from "./credencial";


export class Usuario {
  idUsuario: number;
  nombre: string;
  edad: number;
  descripcion: string;
  telefono: string;
  web: string;
  redesSociales: string[];
  foto: string | null;
  credencial: Credencial;

  constructor(
    idUsuario: number,
    nombre: string,
    edad: number,
    descripcion: string,
    telefono: string,
    web: string,
    redesSociales: string[],
    foto: string | null,
    credencial: Credencial
  ) {
    this.idUsuario = idUsuario;
    this.nombre = nombre;
    this.edad = edad;
    this.descripcion = descripcion;
    this.telefono = telefono;
    this.web = web;
    this.redesSociales = redesSociales;
    this.foto = foto;
    this.credencial = credencial;
  }
}
