import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actividad } from '../model/actividad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private apiUrl = 'http://localhost:8080/actividad'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) { }

  // Crear actividad
  crearActividad(actividad: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(`${this.apiUrl}`,  actividad);
  }

  // Actualizar actividad
  actualizarActividad(id: number, actividad: Actividad): Observable<Actividad> {
    return this.http.put<Actividad>(`${this.apiUrl}/${id}`, actividad);
  }

  // Eliminar actividad
  eliminarActividad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener actividad por ID
  obtenerActividadPorId(id: number): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.apiUrl}/${id}`);
  }

  // Obtener actividades por estado
  obtenerActividadesPorEstado(estado: string = 'DISPONIBLE'): Observable<Actividad[]> {
    const params = new HttpParams().set('estado', estado);
    return this.http.get<Actividad[]>(`${this.apiUrl}/estado`, { params });
  }

  // Obtener actividades por nombre
  obtenerActividadesPorNombre(nombre: string = ''): Observable<Actividad[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Actividad[]>(`${this.apiUrl}/nombre`, { params });
  }

  obtenerActividadesPorIdUsuario(idUsuario: number): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }
}
