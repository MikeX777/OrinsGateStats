import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../Services/jwt/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private jwtServive: JwtService
        ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.jwtServive.getJwt() !== null) {
            const authRequest = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${this.jwtServive.getJwt()}`)
            });

            return next.handle(authRequest);
        }
        return next.handle(request);
    }
}
