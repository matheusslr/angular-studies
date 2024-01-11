import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  urlsToNotUse: Array<string>;

  constructor(private authService: AuthService) {
    this.urlsToNotUse = [
      '/login',
      '/register'
    ];
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isValidRequestForInterceptor(req.url)) {
      let modifiedRequest = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.authService.getToken()}`
        }
      });

      return next.handle(modifiedRequest);
    }
    return next.handle(req);
  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {
    for (let url of this.urlsToNotUse) {
      if (requestUrl.includes(url))
        return false;
    }
    return true;
  }
}
