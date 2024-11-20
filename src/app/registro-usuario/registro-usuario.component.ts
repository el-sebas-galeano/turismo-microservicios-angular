import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  usuario = {
    nombre: '',
    edad: null,
    descripcion: '',
    telefono: '',
    credencial: {
      username: '',
      password: '',
      rol: ''
    }
  };

  onSubmit() {
    console.log('Usuario registrado:', this.usuario);
    // Aquí puedes agregar lógica para enviar los datos al backend
  }
}
