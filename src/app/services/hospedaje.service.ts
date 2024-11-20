import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospedaje } from '../model/hospedaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {

  private apiUrl = 'http://localhost:8080/hospedaje'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) { }

  // Crear hospedaje
  crearHospedaje(hospedaje: Hospedaje): Observable<Hospedaje> {
    return this.http.post<Hospedaje>(`${this.apiUrl}`, hospedaje);
  }

  // Actualizar hospedaje
  actualizarHospedaje(id: number, hospedaje: Hospedaje): Observable<Hospedaje> {
    return this.http.put<Hospedaje>(`${this.apiUrl}/${id}`, hospedaje);
  }

  // Eliminar hospedaje
  eliminarHospedaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener hospedaje por ID
  obtenerHospedajePorId(id: number): Observable<Hospedaje> {
    return this.http.get<Hospedaje>(`${this.apiUrl}/${id}`);
  }

  // Obtener hospedajes por estado
  obtenerHospedajesPorEstado(estado: string = 'DISPONIBLE'): Observable<Hospedaje[]> {
    const params = new HttpParams().set('estado', estado);
    return this.http.get<Hospedaje[]>(`${this.apiUrl}/estado`, { params });
  }

  // Obtener hospedajes por nombre
  obtenerHospedajesPorNombre(nombre: string = ''): Observable<Hospedaje[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Hospedaje[]>(`${this.apiUrl}/nombre`, { params });
  }

  obtenerHospedajesPorIdUsuario(idUsuario: number): Observable<Hospedaje[]> {
    return this.http.get<Hospedaje[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }
}
