import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../base-service';
import {Alias} from "../interfaces/alias";

@Injectable({
    providedIn: 'root',
})
export class AliasService extends BaseService<Alias, { realEmail: string, aliasEmail: string }> {
    constructor(
        http: HttpClient
    ) {
        super(http, '/api/aliases');
    }
}
