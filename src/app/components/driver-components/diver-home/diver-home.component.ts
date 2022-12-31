import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmPriceComponent } from '../../dialogs/confirm-price/confirm-price.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-diver-home',
  templateUrl: './diver-home.component.html',
  styleUrls: ['./diver-home.component.css']
})
export class DiverHomeComponent implements OnInit {

  confirm:Boolean=false;
  selectedOption: any;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  isConfirm(){
    this.confirm=!this.confirm
    //alert(this.confirm)
  }

  openConfirmPrice(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(ConfirmPriceComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      this.router.navigate(['/ongoing-ride']);
  });
}
}
