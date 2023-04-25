import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddeditcomponentComponent } from '../addeditcomponent/addeditcomponent.component';
import { ProdService } from '../service/prod.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  flt = '';

  displayedProducts: MyObjLayout[] = [];

  constructor(private _dialog: MatDialog, private prodServ: ProdService) { }

  ngOnInit(): void {
    this.getFood()
  }

  getFood() {
    this.prodServ.getFood().subscribe({
      next: (res) => {
        this.displayedProducts = res
        console.log(this.displayedProducts)
      },
      error: console.log
    })
  }



  openAdd() {
    const diagRef = this._dialog.open(AddeditcomponentComponent);

    diagRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFood();
        }
      }
    })
  }

  deleteFood(id: number) {
    this.prodServ.deleteFood(id).subscribe({
      next: (res) => {
        this.getFood();
      },
      error: console.log
    })
  }

  openEdit(data: any) {
    const diagRef = this._dialog.open(AddeditcomponentComponent, {data: data});

    diagRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFood();
        }
      },
    });
  }

  Expired: boolean;
  checkExpired(date: string | number | Date) {

    let d1 = new Date
    let d2 = new Date(date)

    if (d1.getTime() > d2.getTime()) {
      this.Expired = true; 
    } else {
      this.Expired = false;
    }

    return this.Expired
  }

}

interface MyObjLayout {
  foodName: string;
  expirationDate: string;
  foodType: string;
  imageURL: string;
  id: number;
}