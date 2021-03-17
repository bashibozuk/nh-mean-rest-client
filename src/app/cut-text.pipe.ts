import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const length: number = args[0] as number;
    return value.substr(0, length) + '...';
  }

}
