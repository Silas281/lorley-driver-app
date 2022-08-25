import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awaiting',
  templateUrl: './awaiting.component.html',
  styleUrls: ['./awaiting.component.css']
})
export class AwaitingComponent implements OnInit {
  confirm:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  isConfirm(){
    this.confirm=!this.confirm
    //alert(this.confirm)
  }
}
