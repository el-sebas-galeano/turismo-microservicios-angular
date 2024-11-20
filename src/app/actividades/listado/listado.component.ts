import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActividadService } from '../../services/actividad.service';
import { log } from 'console';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-listado',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  actividades: any[] = [];

  constructor(private actividadService: ActividadService, private router: Router, private sessionService: SessionService) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && this.sessionService.getUserId()) {
      const idUsuario = this.sessionService.getUserId();
      if (idUsuario) {
        this.actividadService.obtenerActividadesPorIdUsuario(+idUsuario).subscribe({
          next: (data) => (this.actividades = data),
          error: (err) => console.error('Error al obtener actividades:', err)
        });
      }
    }
  }

  verActividad(id: number): void {
    console.log('Ver actividad', id);
    this.router.navigate(['/ver-actividad', id])
  }

  editarActividad(id: number): void {
    console.log('Editar actividad', id);
    // Implementar lógica para redirigir al formulario de edición
  }

  eliminarActividad(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la actividad permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadService.eliminarActividad(id).subscribe({
          next: () => {
            const idUsuario = this.sessionService.getUserId();
            this.actividadService.obtenerActividadesPorIdUsuario(idUsuario || 0).subscribe({
              next: (data) => (this.actividades = data),
              error: (err) => console.error('Error al obtener actividades:', err)
            });
            Swal.fire('Eliminado', 'La actividad fue eliminada con éxito.', 'success');

          },
          error: (err) => Swal.fire('Error', 'No se pudo eliminar la actividad.', 'error')
        });
      }
    });
  }

  crearActividad(): void {
    this.router.navigate(['/crear-actividad']) 
  }
}
