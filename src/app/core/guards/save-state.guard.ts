import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

// Define an interface for components that need save logic
export interface CanComponentDeactivate {
    saveState: () => void;
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class SaveStateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> {
        component.saveState(); 
        
        return true;
    }
}
