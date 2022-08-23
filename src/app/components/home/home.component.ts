import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation, Position } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    this.createMap()
  }

  async createMap() {
    let position: Position = await this.getCurrentPosition();
    this.newMap = await GoogleMap.create({
      id: 'LorleyMap',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 12,
      },
    });
    await this.newMap.addMarker({
      coordinate: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
  }


  async getCurrentPosition() {
    return Geolocation.getCurrentPosition();
  };

  async centerMap() {
    let position: Position = await this.getCurrentPosition();
    await this.newMap.setCamera({
      coordinate: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
  }

  chooseDestination() {
    console.log("clicked");
    this.router.navigate(['choose-destination']);
  }

}
