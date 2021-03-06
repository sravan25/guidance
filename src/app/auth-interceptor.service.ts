import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("Request is on its way");
        const modifiedReq = req.clone(
            {
                headers:req.headers.append("extra",'xyz')
            }
        )
   //     return next.handle(modifiedReq);

        return next.handle(modifiedReq).pipe(
             tap(event => {
                 if(event.type ===HttpEventType.Response) {
                     console.log(event.body)
                 }
             })
         )

    }
}
