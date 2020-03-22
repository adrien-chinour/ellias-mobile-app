import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

/**
 * API Client to interact with backend application
 */
export class ApiService {

    constructor(private httpClient: HttpClient) {
    }
}
