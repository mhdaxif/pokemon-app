import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    pendingRequestsCount = 0;
    private loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    loading$ = this.loaderSubject.asObservable();

    startLoading() {
        this.loaderSubject.next(true);
    }
 
    stopLoading() {
        this.loaderSubject.next(false);
    }
}