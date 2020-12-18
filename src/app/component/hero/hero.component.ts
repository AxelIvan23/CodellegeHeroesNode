import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../servicios/server.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnChanges {

  hero:any= {};

  constructor( private _activatedRoute: ActivatedRoute, private _heroService: ServerService) { 
  	this._activatedRoute.params.subscribe( param =>  {
  		//this.hero = this._heroService.getHeroe(param['id']);
      this._heroService.getHeroe(param['id']).subscribe((data : any) => {
        this.hero=data;
        console.log(data);
      });
  	})
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    
  }
}
