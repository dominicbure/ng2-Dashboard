import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

//data model
import {FormData} from './../components/form-component/form-model';

import {Observable} from 'rxjs/Rx';


@Injectable()
export class EmployeeService{

    private apiUrl = "app/json/employeeData.json";

    constructor(private http:Http){}

    getEmployee(): Observable<FormData[]>{

        //let headers = new Headers({ 'Content-Type': 'application/json' });
       // let options = new RequestOptions({ headers: headers });

        //call the http method
       return this.http.get(this.apiUrl).map((res:Response) => res.json())
        .catch((err:any) => Observable.throw(err));
    }




}