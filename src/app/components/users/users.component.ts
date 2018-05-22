import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email:''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
// setTimeout(() => {
  
  this.loaded = true;
// },2000)

  }

  onSubmit({value, valid}: {value: User, valid:boolean}){
   
    if(!valid){
      console.log('Form is not valid');
    } 
    else {
        value.isActive = true;
        value.registered= new Date();
        value.hide = false;
        
        this.userService.addUser(value);

        this.form.reset();

      }


  }


}
