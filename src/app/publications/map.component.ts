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

  @Input() mapTitle: string;
  @Input() defaultPositionLat: number;
  @Input() defaultPositionLng: number;
  

  constructor(private mapservice: MapCoordsService) {
  }

  setPosition(position){
    //Get window geolocalisation
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    //Add marker in map center
    this.markers.push({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      draggable: true
    });
    //We save window geolocalisation in Service
    this.mapservice.latitude = this.lat;
    this.mapservice.longitude = this.lng;
  }

  ngOnInit(){
    if(this.defaultPositionLat === undefined || this.defaultPositionLng === undefined) {
       if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        };
    } else {
        this.lat = this.defaultPositionLat;
        this.lng = this.defaultPositionLng;
        this.markers.push({
          lat: this.lat,
          lng: this.lng,
          draggable: false
        });
    }
   }
 
  markerDragEnd(m: marker, $event: MouseEvent) {
    let smth: any = $event;
    this.mapservice.latitude = smth.coords.lat;
    this.mapservice.longitude = smth.coords.lng;
  }

  mapClicked($event: MouseEvent) {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
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