import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diver-home',
  templateUrl: './diver-home.component.html',
  styleUrls: ['./diver-home.component.css']
})
export class DiverHomeComponent implements OnInit {

  confirm:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  isConfirm(){
    this.confirm=!this.confirm
    //alert(this.confirm)
  }

}
