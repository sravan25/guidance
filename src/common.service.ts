import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  logInfo(className,msg) {
    console.log(className,msg)
  }
  logWarn(className,msg) {
    console.warn(className,msg)
  }

  logError(className,err) {

    console.error(className,err)
  }
}
