import { Component, OnInit } from '@angular/core';
import { MapCoordsService } from './map-coords.service';

@Component({
  selector: 'mg-publish',
  templateUrl: './publish.component.html',
  styles: [],
  providers: [MapCoordsService]
})
export class PublishComponent implements OnInit {
  publication = {
    body: '',
    file: '',
    lat: '',
    lng: ''
  }
  showTheMap: boolean = false;
  constructor(private mapservice:MapCoordsService) { }

  ngOnInit() {
  }

  public showMap() {
  	this.showTheMap = true;
  }

  submit(f){
    console.log(this.mapservice.latitude);
    console.log(this.mapservice.longitude);
  }

}
