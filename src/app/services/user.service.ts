import { Injectable } from '@angular/core';

import { User } from '../models/User'

@Injectable()
export class UserService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email:'John@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email:'Kevin@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email:'Karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getUsers() : User[] {
    console.log('fetching user from Service');
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user)
  }
  
}
