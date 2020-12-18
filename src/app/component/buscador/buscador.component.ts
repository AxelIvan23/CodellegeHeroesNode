import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../servicios/server.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _heroService: ServerService) { }
  Resultados: any = [];

  ngOnInit(): void {
  	this._aRoute.params.subscribe( params => {
  		this._heroService.searchHeroes(params['termino']).subscribe((data : any) => {
        this.Resultados=data;
      });;
  	} )
  }

}
