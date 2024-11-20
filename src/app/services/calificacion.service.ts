import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calificacion } from '../model/calificacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private apiUrl = 'http://localhost:8080/calificacion'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) { }

  // Crear calificación
  crearCalificacion(calificacion: Calificacion): Observable<Calificacion> {
    return this.http.post<Calificacion>(`${this.apiUrl}`, calificacion);
  }

  // Actualizar calificación
  actualizarCalificacion(id: number, calificacion: Calificacion): Observable<Calificacion> {
    return this.http.put<Calificacion>(`${this.apiUrl}/${id}`, calificacion);
  }

  // Eliminar calificación
  eliminarCalificacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener calificación por ID
  obtenerCalificacionPorId(id: number): Observable<Calificacion> {
    return this.http.get<Calificacion>(`${this.apiUrl}/${id}`);
  }

  // Obtener calificaciones por ID de servicio
  obtenerCalificacionesPorServicio(servicioId: number): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(`${this.apiUrl}/Calificacion/${servicioId}`);
  }

  // Calcular promedio de calificaciones por ID de servicio
  calcularPromedioCalificaciones(servicioId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/promedio/${servicioId}`);
  }
}
