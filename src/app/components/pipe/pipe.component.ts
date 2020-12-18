import { Component, OnInit } from '@angular/core';
import { } from '@angular/platform-browser';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  NombreAlterno: String = 'AxEl IVán vAlDez rEyEs';
  Nombre: String = 'Axel Iván Vadez Reyes';
  ArrayPrueba= ["A","B","C","D","E","F","G","H","I","J","K"];
  PI = Math.PI;
  Video: string = 'https://www.youtube.com/embed/C8FQ4wQXyaE';
  valor: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  public cambiar() {
  	console.log("JOJIOOJI");
  	this.valor = !this.valor;
  }
}
