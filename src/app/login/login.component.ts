import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private sessionService: SessionService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          const userRole = response?.credencial.rol;

          this.sessionService.setLoginState(true, userRole);
          this.showLoginSuccess(response?.nombre);
        },
        error: (error) => {
          console.error('Error al iniciar sesión:', error);
          this.showLoginError();
          this.loginForm.reset();
        },
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  goToRegister(): void {
    this.router.navigate(['/registro']);
  }

  private showLoginError(): void {
    Swal.fire({
      icon: 'error',
      title: 'Credenciales inválidas',
      text: 'Por favor, verifica tu usuario y contraseña e intenta de nuevo.',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'swal-button'
      }
    });
  }

  private showLoginSuccess(nombre: String): void {
    Swal.fire({
      icon: 'success',
      title: '¡Login exitoso!',
      text: 'Bienvenido de nuevo, ' + nombre + '.',
      confirmButtonText: 'Continuar',
      customClass: {
        confirmButton: 'swal-button'
      }
    }).then(() => {
      // Redirige al usuario a la página de inicio después de cerrar la alerta
      this.router.navigate(['/home']);
    });
  }
}
