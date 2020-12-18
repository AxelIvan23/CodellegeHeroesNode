import { Component, OnInit, OnChanges } from '@angular/core';
import { ServerService } from '../../servicios/server.service';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit, OnChanges {

  constructor(private _heroService: ServerService, private _router: Router) { }

  ArrayHeroes: any = [];

  ngOnInit(): void {
  	this._heroService.getHeroes().subscribe((data : any) => {
      this.ArrayHeroes=data;
      console.log(data);
    });
  }

  ngOnChanges(): void {
    
  }

  Navegar(index) {
  	console.log(index);
  	this._router.navigate(['/hero/', index]);
  }
}
