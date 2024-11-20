import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alimentacion } from '../model/alimentacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentacionService {
  private apiUrl = 'http://localhost:8080/alimentacion'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) { }

  // Crear alimentación
  crearAlimentacion(alimentacion: Alimentacion): Observable<Alimentacion> {
    return this.http.post<Alimentacion>(`${this.apiUrl}`, alimentacion);
  }

  // Actualizar alimentación
  actualizarAlimentacion(id: number, alimentacion: Alimentacion): Observable<Alimentacion> {
    return this.http.put<Alimentacion>(`${this.apiUrl}/${id}`, alimentacion);
  }

  // Eliminar alimentación
  eliminarAlimentacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener alimentación por ID
  obtenerAlimentacionPorId(id: number): Observable<Alimentacion> {
    return this.http.get<Alimentacion>(`${this.apiUrl}/${id}`);
  }

  // Obtener alimentaciones por estado
  obtenerAlimentacionesPorEstado(estado: string = 'DISPONIBLE'): Observable<Alimentacion[]> {
    const params = new HttpParams().set('estado', estado);
    return this.http.get<Alimentacion[]>(`${this.apiUrl}/estado`, { params });
  }

  // Obtener alimentaciones por nombre
  obtenerAlimentacionesPorNombre(nombre: string = ''): Observable<Alimentacion[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Alimentacion[]>(`${this.apiUrl}/nombre`, { params });
  }

  obtenerAlimentacionesPorIdUsuario(idUsuario: number): Observable<Alimentacion[]> {
    return this.http.get<Alimentacion[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }
}
