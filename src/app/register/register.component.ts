import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  isInserted;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
          name: new FormControl(null, [Validators.required]),
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, Validators.required),
          age: new FormControl(null),
          weight: new FormControl(null),
          height: new FormControl(null),
          gender: new FormControl(null)
    });
  }

  onSubmit () {
    console.log(this.signUpForm.value);
    this.isInserted = 0;
    this.http.post('http://localhost:9000/users/register', this.signUpForm.value).subscribe((data) => {

        console.log('data ==', data)
        this.isInserted =1;
    });
  }

}
