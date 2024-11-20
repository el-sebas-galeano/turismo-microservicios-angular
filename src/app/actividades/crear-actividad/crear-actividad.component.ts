import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actividad } from '../../model/actividad';
import { ActividadService } from '../../services/actividad.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-crear-actividad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent {
  actividadForm: FormGroup;

  tiposActividad = [
    'TREKKING',
    'OBSERVACION_FAUNA',
    'SENDERISMO',
    'KAYAK',
    'CANOA',
    'SNORKEL',
    'BUCEO',
    'OBSERVACION_AVES',
    'PASEOS_CABALLO',
    'CICLISMO',
    'VISITAS_GUIADAS',
    'VOLUNTARIADO_REFORESTACION',
    'LIMPIEZA_PLAYAS',
    'CONSERVACION_FAUNA',
    'CAMPAMENTOS_EDUCATIVOS',
    'TALLERES_MEDIOAMBIENTALES',
    'FOTOGRAFIA_NATURALEZA',
    'CARRERAS_ORIENTACION',
    'ESCALADA',
    'VIA_FERRATA',
    'PESCA_SOSTENIBLE',
    'AGRICULTURA_ECOLOGICA',
    'VISITAS_COMUNIDADES_INDIGENAS',
    'TERAPIAS_NATURALEZA'
  ];

  nivelesDificultad = [
    'FACIL',
    'FACIL_MODERADO',
    'MODERADO',
    'MODERADO_DIFICIL',
    'DIFICIL',
    'DIFICIL_EXTREMO',
    'EXTREMO'
  ];

  estados = [
    'ACTIVO',
    'INACTIVO',
    'EN_MANTENIMIENTO'
  ];

  constructor(private fb: FormBuilder,
    private actividadService: ActividadService,
    private router: Router,
    private sessionService: SessionService
  ) {
    // Inicialización del formulario con controles y validadores
    this.actividadForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoActividad: ['', Validators.required],
      duracion: [null, [Validators.required]],
      nivelDificultad: ['', Validators.required],
      precio: [null, [Validators.required]],
      requerimientos: [''],
      capacidadMaxima: [null, [Validators.required]],
      ubicacionLatitud: [null, Validators.required],
      ubicacionLongitud: [null, Validators.required],
      nombreUbicacion: ['', Validators.required],
      estado: ['', Validators.required],
      foto: [null],
      fotosDescripcion: [[]]
    });
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.actividadForm.valid) {
      const nuevaActividad: Actividad = this.actividadForm.value;
      nuevaActividad.idUsuario = this.sessionService.getUserId() || 0;
      this.actividadService.crearActividad(nuevaActividad).subscribe(
        response => {
          console.log('Actividad creada exitosamente:', response);
          this.router.navigate(['/ver-actividad', response.idServicio]);
        },
        error => {
          console.error('Error al crear actividad:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
