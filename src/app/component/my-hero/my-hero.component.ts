import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../servicios/server.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent implements OnInit {

  constructor(private _heroService: ServerService, private _router: Router) { }

  ArrayHeroes: any = [];

  ngOnInit(): void {
  	this._heroService.getActive().subscribe((data : any) => {
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
