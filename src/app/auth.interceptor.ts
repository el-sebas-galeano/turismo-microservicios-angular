import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SessionService } from './services/session.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Agrega el token en las solicitudes si está disponible
    const authToken = this.sessionService.getToken();
    let authReq = req;

    if (authToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      tap((event) => {
        // Captura el token en la respuesta del login y guárdalo en el SessionService
        if (event instanceof HttpResponse && event.headers.has('Authorization')) {
          const bearerToken = event.headers.get('Authorization');
          if (bearerToken && bearerToken.startsWith('Bearer ')) {
            const token = bearerToken.split(' ')[1];
            this.sessionService.setToken(token);
          }
        }
      })
    );
  }
}
