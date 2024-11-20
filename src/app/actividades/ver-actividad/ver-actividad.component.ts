import { Component, Input } from '@angular/core';
import { Actividad } from '../../model/actividad';
import { ActividadService } from '../../services/actividad.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-actividad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-actividad.component.html',
  styleUrl: './ver-actividad.component.css'
})
export class VerActividadComponent {
  actividad?: Actividad;

  constructor(
    private actividadService: ActividadService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obtener el ID de la actividad desde la URL (por ejemplo, /actividad/:id)
    const actividadId = +this.route.snapshot.paramMap.get('idActividad')!;
    
    // Llamar al servicio para obtener los detalles de la actividad
    this.actividadService.obtenerActividadPorId(actividadId).subscribe(
      (actividad) => {
        this.actividad = actividad;
      },
      (error) => {
        console.error('Error al obtener actividad:', error);
      }
    );
  }

  verMapa(): void {
    console.log('Mostrando mapa para la ubicación:', this.actividad?.nombreUbicacion);
    // Aquí agregarías el código para mostrar el mapa con la latitud y longitud
  }
}
