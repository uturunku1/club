import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'roles'
})
export class RolesPipe implements PipeTransform {

  transform(input: Member[], roleSelected: string ): any {
    if(input){
      let output: Member[]= [];
      for(let i= 0; i< input.length; i++ ){
        if(roleSelected==="all"){
          output.push(input[i]);
        }else{
          if(input[i].role===roleSelected){
            output.push(input[i]);
          }
        }
      }
      return output;
    }
    // return null;
  }

}
