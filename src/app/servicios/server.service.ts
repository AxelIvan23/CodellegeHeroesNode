import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  getQuery(query : string) {
	    const url = `http://localhost:3000/${query}`;
	    return this.http.get(url);
  	}

  	getHeroes() {
  		return this.getQuery(`Heroes`).pipe(map(data => {
        //console.log("IM-PRE-DE-CI-BLE"+data);
	      return data;
	    }));
  	}

    getHeroe(id) {
      return this.getQuery(`hero/${id}`).pipe(map(data => {
        return data;
      }));
    }

    searchHeroes(term) {
      return this.getQuery(`heroesTerm?termino=${term}`).pipe(map(data => {
        return data;
      }));
    }

    getActive() {
      return this.getQuery(`heroesAct`).pipe(map(data => {
        return data;
      }));
    }
}

