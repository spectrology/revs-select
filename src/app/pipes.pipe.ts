import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstname'
})
export class firstname implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let space = value.indexOf(" ")
    let firstname = value.slice(0, space)
    return firstname
  }
}