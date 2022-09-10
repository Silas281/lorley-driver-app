import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-awaiting',
  templateUrl: './awaiting.component.html',
  styleUrls: ['./awaiting.component.css']
})
export class AwaitingComponent implements OnInit {
  confirm:Boolean=false;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  isConfirm(){
    this.confirm=!this.confirm
    //alert(this.confirm)
  }

  openConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });

}

}
