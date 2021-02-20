import { Injectable } from '@angular/core';

export class AuthService {
  loggedIn = false;

  constructor() { 

    console.log("Authenticate Servive -- constructor");
  }

  isAuthenticated() {
    console.log("Authenticate Servive -- isAuthenticated");
    const promise = new Promise(
      (resolve,reject) => {
        console.log("Authenticate Servive -- resolve");
        setTimeout(()=> {
          resolve(this.loggedIn);
        },800)
      }
    )
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
