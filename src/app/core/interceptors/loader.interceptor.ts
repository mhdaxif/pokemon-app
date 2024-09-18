import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private _loadingService: LoadingService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        this._loadingService.pendingRequestsCount++;
        if (this._loadingService.pendingRequestsCount > 0) {
            this._loadingService.startLoading();
        }

        return next.handle(request).pipe(
            finalize(() => {
                this._loadingService.pendingRequestsCount--;
                if (this._loadingService.pendingRequestsCount === 0) {
                    this._loadingService.stopLoading();
                }
            })
        );
    }
} 
