import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Team } from '../types/team.type';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyDataService {

    constructor(private http: Http) {
    }

    get(): Observable<Team[]> {
        return this.http.get(environment.restApiUrl)
            .map(res => res.json() as Team[])
            .catch(error => Observable.throw(error));
    }
}
