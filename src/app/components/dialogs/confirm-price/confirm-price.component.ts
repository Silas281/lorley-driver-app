import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-price',
  templateUrl: './confirm-price.component.html',
  styleUrls: ['./confirm-price.component.css']
})
export class ConfirmPriceComponent implements OnInit {
  isProcessing:Boolean = false;
  isComplete:Boolean = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  process(){
    this.isProcessing = true;
    setTimeout(()=>{
      
     
      setTimeout(()=>{
      this.isComplete =false;
      this.isProcessing = false;
      this.router.navigate(['/ongoing-ride']);
      this.dialog.closeAll();   
      },3000);
      this.isComplete =true;

    },3000)
  }



}
