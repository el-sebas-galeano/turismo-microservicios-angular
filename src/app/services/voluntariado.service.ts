import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voluntariado } from '../model/voluntariado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoluntariadoService {

  private apiUrl = 'http://localhost:8080/voluntariado'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) { }

  // Crear voluntariado
  crearVoluntariado(voluntariado: Voluntariado): Observable<Voluntariado> {
    return this.http.post<Voluntariado>(`${this.apiUrl}`, voluntariado);
  }

  // Actualizar voluntariado
  actualizarVoluntariado(id: number, voluntariado: Voluntariado): Observable<Voluntariado> {
    return this.http.put<Voluntariado>(`${this.apiUrl}/${id}`, voluntariado);
  }

  // Eliminar voluntariado
  eliminarVoluntariado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener voluntariado por ID
  obtenerVoluntariadoPorId(id: number): Observable<Voluntariado> {
    return this.http.get<Voluntariado>(`${this.apiUrl}/${id}`);
  }

  // Obtener voluntariados por estado
  obtenerVoluntariadosPorEstado(estado: string = 'DISPONIBLE'): Observable<Voluntariado[]> {
    const params = new HttpParams().set('estado', estado);
    return this.http.get<Voluntariado[]>(`${this.apiUrl}/estado`, { params });
  }

  // Obtener voluntariados por nombre
  obtenerVoluntariadosPorNombre(nombre: string = ''): Observable<Voluntariado[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Voluntariado[]>(`${this.apiUrl}/nombre`, { params });
  }

  obtenerVoluntariadosPorIdUsuario(idUsuario: number): Observable<Voluntariado[]> {
    return this.http.get<Voluntariado[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }
}
