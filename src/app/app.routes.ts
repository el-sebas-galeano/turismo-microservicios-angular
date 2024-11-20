import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './actividades/listado/listado.component';
import { CrearActividadComponent } from './actividades/crear-actividad/crear-actividad.component';
import { VerActividadComponent } from './actividades/ver-actividad/ver-actividad.component';

export const routes: Routes = [
    { path: 'registro', component: RegistroUsuarioComponent },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'actividades', component: ListadoComponent},
    { path: 'crear-actividad', component: CrearActividadComponent},
    { path: 'ver-actividad/:idActividad', component: VerActividadComponent}
];
