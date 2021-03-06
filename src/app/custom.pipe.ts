import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class CustomPipe implements PipeTransform {
    transform(value: any, limit: number  ) {
        console.log("cutom filter");
        if(value.length > limit) {
            return value.substr(0, limit);
        }
        return value;
    }
}
