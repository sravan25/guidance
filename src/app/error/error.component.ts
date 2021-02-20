import {Component, OnInit }from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-error',
    templateUrl: './error.component.html', 
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{
    message:string;

    constructor(private route:ActivatedRoute,private router:Router) {
        this.message = this.route.snapshot.data.message;
    }
    ngOnInit() {

    }
}
