import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, cond: boolean): string {

  	if (cond==true) {
  		let valor = value.split('');
	  	for (let i=0;i<valor.length;i++) {
	  		valor[i] = '*';
	  	}
	  	value = valor.join('');
  	}
  	
    return value;
  }

}
