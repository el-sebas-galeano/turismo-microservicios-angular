import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transporte } from '../model/transporte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  private apiUrl = 'http://localhost:8080/transporte'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) { }

  // Crear transporte
  crearTransporte(transporte: Transporte): Observable<Transporte> {
    return this.http.post<Transporte>(`${this.apiUrl}`, transporte);
  }

  // Actualizar transporte
  actualizarTransporte(id: number, transporte: Transporte): Observable<Transporte> {
    return this.http.put<Transporte>(`${this.apiUrl}/${id}`, transporte);
  }

  // Eliminar transporte
  eliminarTransporte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener transporte por ID
  obtenerTransportePorId(id: number): Observable<Transporte> {
    return this.http.get<Transporte>(`${this.apiUrl}/${id}`);
  }

  // Obtener transportes por estado
  obtenerTransportesPorEstado(estado: string = 'DISPONIBLE'): Observable<Transporte[]> {
    const params = new HttpParams().set('estado', estado);
    return this.http.get<Transporte[]>(`${this.apiUrl}`, { params });
  }

  obtenerTransportesPorIdUsuario(idUsuario: number): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }
}
