import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    public cartItem$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public order_summary$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

}