import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    BASE_URL: string;
    constructor(
        private http: HttpClient,
    ) {
        this.BASE_URL = environment.API_URL;
    }
    productsList(): Observable<any> {
        return this.http.get(`assets/json/products.json`).pipe(
            map((response: any) => {
                return response;
            }),
            catchError((err: any) => {
                return err;
            })
        );
    }


}