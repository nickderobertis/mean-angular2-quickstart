import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService {

   constructor(private http: Http) { }
   
   // Get all users from the API
  getAllUsers() {
    return this.http.get('/api/users')
        .map(this.extractData);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
  
  newUser(user: User) {
    return this.http.post('/api/users', user).subscribe(
        res => {
            console.log(res.json());
        },
        error => {
            console.log(error);
        }
    );
  }

}
