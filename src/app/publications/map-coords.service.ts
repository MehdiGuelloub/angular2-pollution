import { Injectable } from '@angular/core';


@Injectable()
export class MapCoordsService {
 
  private static lng:number;
  private static lat:number;
  constructor() { }

  get longitude():number{
  	return MapCoordsService.lng;
  }

  set longitude(o:number){
  	MapCoordsService.lng = o;
  }

  get latitude():number{
  	return MapCoordsService.lat;
  }

  set latitude(o:number){
  	MapCoordsService.lat = o;
  }
}