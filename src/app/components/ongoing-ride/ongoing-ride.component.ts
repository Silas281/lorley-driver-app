import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation, Position } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ongoing-ride',
  templateUrl: './ongoing-ride.component.html',
  styleUrls: ['./ongoing-ride.component.css']
})
export class OngoingRideComponent implements OnInit {

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    this.createMap()
  }

  async createMap() {
    let position: Position = await this.getCurrentPosition();
    console.log(" position.coords.latitude->"+ position.coords.latitude);
    console.log(" position.coords.latitude->"+ position.coords.latitude);
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

    await this.newMap.addMarker({
      coordinate: {
        lat: position.coords.latitude+0.02,
        lng: position.coords.longitude+0.03,
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

  openConfirmDialog(){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: {},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.openSnackBar("Ride Canceled");
          this.router.navigate(['']);
        }

        //this.animal = result;
      });

  }

  openSnackBar(message: string) {
    this._snackBar.open(message,"close",
    {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",


    });
  }
}
