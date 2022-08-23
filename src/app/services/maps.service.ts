import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getPlaces(searchText: string, coords: { lat: number, lng: number }) {
    return this.http.get(
      `${environment.ngrokUrl}/places`,
      {
        params: {
          "key": "AIzaSyD7HOx8zsQs_PDBr-f0YRXF_9bD-OaHdoI",
          "input": searchText,
          "lat": coords.lat,
          "lng": coords.lng
        }
      }
    )
  }
}
