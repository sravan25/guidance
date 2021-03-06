import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  // tslint:disable-next-line:typedef
  fetchUsers(data) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("name", data.name);
    searchParams = searchParams.append("password", data.password);

    return this.http.post('http://localhost:9000/users/login', data,
        {
            headers: new HttpHeaders({'content-type': 'json'}),
            params: searchParams
            })
        .pipe(map(response => {
              return response;
            })
        );
  }
}
