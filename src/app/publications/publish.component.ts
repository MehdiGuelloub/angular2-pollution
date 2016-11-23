import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapCoordsService } from './map-coords.service';
import { PublicationCrudService } from '../publication-crud.service';

@Component({
  selector: 'mg-publish',
  templateUrl: './publish.component.html',
  styles: [],
  providers: [MapCoordsService, PublicationCrudService]
})
export class PublishComponent implements OnInit {
  publication: any = {
    body: '',
    file: '',
    lat: '',
    lng: ''
  }

  @Output('newPublication') update = new EventEmitter();
  showTheMap: boolean = false;
  constructor(private mapservice:MapCoordsService, private crudService:PublicationCrudService) { }

  ngOnInit() {
  }

  public showMap() {
  	this.showTheMap = true;
  }

  get profile() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost/pollution-blog/upload.php',
    allowedExtensions:  ['jpg', 'png', 'mp4', 'pdf'],
    fieldReset: false
  };

  handleUpload(data): void {
    if (data && data.response) {
      this.publication.file = '/uploads/' + JSON.parse(data.response).generatedName;
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  submit(f){
    if(this.showTheMap === false) { 
      alert("Veuillez choisir votre position...");
      this.showTheMap = true;
    } else {
      this.publication.lat = this.mapservice.latitude;
      this.publication.lng = this.mapservice.longitude;
      this.crudService.addPublication(this.publication.body, this.publication.file, this.publication.lat, this.publication.lng, JSON.parse(localStorage.getItem('profile')).user_id )
                      .subscribe(
                            (data: any) => this.update.emit(),
                            (error: any) => console.log(error),
                       );
      this.publication.body = '';
      this.showTheMap = false;
    }
  }

}
