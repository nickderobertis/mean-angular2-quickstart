import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    private model: User = new User('','','');
    private users: Object[] = [];
  
    constructor(private usersService: UsersService) { }

    ngOnInit() {
    }
    
    newUser() {
        this.usersService.newUser(this.model);
    }
    
    showUsers() {
       // Retrieve users from the API
        this.usersService.getAllUsers().subscribe(users => {
          this.users = users;
        }); 
    }

}
