import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
    console.log("Constructor == CommonService");
   }

  logInfo(className, msg): void {
    console.log(className, msg);
  }
  logWarn(className, msg): void{
    console.warn(className, msg);
  }

  logError(className, err): void {

    console.error(className, err);
  }
}
