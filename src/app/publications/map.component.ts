import {
  Component,
  NgModule,
  OnInit,
  Input
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';

import { MapCoordsService } from './map-coords.service';



@Component({
  selector: 'mg-map',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: './map.component.html',
  providers: [MapCoordsService]
})
export class MapComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number;
  lng: number

  markerLat: number;
  markerLng: number;

  @Input() defaultPositionLat: number;
  @Input() defaultPositionLng: number;
  

  constructor(private mapservice: MapCoordsService) {
  }

  setPosition(position){
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    this.markers.push({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      draggable: true
    });
    this.mapservice.latitude = this.lat;
    this.mapservice.longitude = this.lng;
  }

  ngOnInit(){
    console.log(this.defaultPositionLng)
    if(this.defaultPositionLat === undefined || this.defaultPositionLng === undefined) {
         if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
          };
    }
   }
 
  markerDragEnd(m: marker, $event: MouseEvent) {
    this.mapservice.latitude = $event.coords.lat;
    this.mapservice.longitude = $event.coords.lng;
  }

  mapClicked($event: MouseEvent) {
  }
  
  markers: marker[] = [
  ];
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}