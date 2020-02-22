import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../Services/global/global.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private globalService: GlobalService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.globalService.token !== null) {
            const authRequest = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${this.globalService.token}`)
            });

            return next.handle(authRequest);
        }
        return next.handle(request);
    }
}
