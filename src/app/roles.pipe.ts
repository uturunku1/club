import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roles'
})
export class RolesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
