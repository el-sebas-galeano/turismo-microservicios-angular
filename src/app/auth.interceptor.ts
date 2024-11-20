import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SessionService } from './services/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.sessionService.getToken();
    let authReq = req;

    if (authToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    }

    return next.handle(authReq).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          // Verifica si el encabezado Authorization está presente
          console.log('Headers recibidos:', event.headers.keys());

          const authHeader = event.headers.get('Authorization');
          if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            this.sessionService.setToken(token);
            console.log('Token guardado:', token);
          } else {
            console.log('Encabezado Authorization no encontrado en la respuesta.');
          }
        }
      })
    );
  }
}
