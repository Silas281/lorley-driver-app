import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-choose-destination',
  templateUrl: './choose-destination.component.html',
  styleUrls: ['./choose-destination.component.css']
})
export class ChooseDestinationComponent implements OnInit {
  @ViewChild('fromSearchField') fromSearchField!: ElementRef
  @ViewChild('toSearchField') toSearchField!: ElementRef


  options = {
    componentRestrictions: {
      country: ["GH"]
    }
  }
  formattedaddress = '';

  constructor(private mapsService: MapsService) { }


  async ngOnInit(): Promise<void> {
  }

  async getCurrentPosition() {
    return Geolocation.getCurrentPosition();
  };

  async search($event: any) {
    let position: Position = await this.getCurrentPosition();
    this.mapsService.getPlaces(this.fromSearchField.nativeElement.value, { lat: position.coords.latitude, lng: position.coords.longitude }).subscribe((res: any) => console.log(res['predictions']))
  }

  addressChange(address: any) {
    this.formattedaddress = address.formatted_address
  }
}

