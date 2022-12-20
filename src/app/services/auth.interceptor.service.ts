import { HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler
} from "@angular/common/http";

import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
intercept(
  req: HttpRequest<any>, 
  next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('hello-token')

    req = req.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : '[]',
      }
    })

    return next.handle(req);
  
}
}