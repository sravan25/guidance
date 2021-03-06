import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {interval, Observable, Observer, Subscription} from 'rxjs';

import { map, filter} from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  @ViewChild('f') loginForm: NgForm;
  uname: string;
  password: string;
  gender: string;
  firstObsSubscription: Subscription;
  customeObservable$: Observable<any>;
  private number: any;
  errMsg: string;
  constructor(private httpClient: HttpClient, private userService: UserService) {

  }

  ngOnInit(): void {

    // this.firstObsSubscription = interval(1000).subscribe( (value) => {
     // console.log('count ==', value);
    // });

    this.customeObservable$ = new Observable((Obs: Observer<any>) => {
     let count = 0;
     setInterval(() => {
       Obs.next(count);
       if (count === 2) { // try with 2 and try by removing remove
         Obs.complete();
       }
       if (count > 3) {
         Obs.error(new Error( 'Count is greater 3!' ));
       }
       count++;
     }, 1000);

   });
   /*
    this.firstObsSubscription = this.customeObservable$.subscribe((val) => {
      console.log(" --- ",val);
    },(err) => {
      console.log(err);
    },() => {
      console.log("Completed");
    });

      this.firstObsSubscription = this.customeObservable$.pipe(map((data: number) => {
      return 'Round:' + (data +1);
    })).subscribe(data => {
      console.log(data);
    },error => {
      console.log(error)
    },() => {
      console.log('completed')
    });

    */

    this.firstObsSubscription = this.customeObservable$.pipe(filter((data: number) => {
      return data > 0;
    }), map((data: number) => {
        return 'Round:' + (data + 1);
      })
    ).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('completed');
    });
  }

  ngOnChange(): void {
      console.log('gender :' + this.gender);
  }

  suggestedValue(): void {
      this.loginForm.form.patchValue({
          userData: {
              name: 'sravan'
          }
      });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

    // tslint:disable-next-line:typedef
  onSubmit() {
      console.log(this.loginForm.value);
      this.userService.fetchUsers(this.loginForm.value.userData).
      subscribe((data) => {

        console.log(data);
        }, error => {
              console.log("error ==",error.message);

            this.errMsg = "Something went wrong";
        });
  }

}
