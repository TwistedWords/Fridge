import { DialogRef } from '@angular/cdk/dialog';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProdService } from '../service/prod.service';

@Component({
  selector: 'app-addeditcomponent',
  templateUrl: './addeditcomponent.component.html',
  styleUrls: ['./addeditcomponent.component.css']
})
export class AddeditcomponentComponent implements OnInit {

  url: any;

  

  foodForm = new FormGroup({
    foodName: new FormControl('', [Validators.required]),
    expirationDate: new FormControl('', [Validators.required]),
    foodType: new FormControl('', [Validators.required]),
    imageURL: new FormControl('', [Validators.required])
  });



  constructor(
    private prodServ: ProdService,
    private dRef: MatDialogRef<AddeditcomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {}

    ngOnInit(): void {
      this.foodForm.patchValue(this.data);
    }

    onSubmit() {

      if (this.foodForm.valid) {
        if (this.data) {
          this.prodServ.updateFood(this.data.id, this.foodForm.value).subscribe({
            next: (val: any) => {
              this.dRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          });
        } else {
          this.prodServ.addFood(this.foodForm.value).subscribe({
            next: (val: any) => {
              this.dRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          });
        }
      }
  
    }

    upload(event: Event) {
      console.log(event);
      const file = (event.target as HTMLInputElement).files[0];
      console.log(file);
  
      var reader = new FileReader();
  
      reader.onload =this._handleReaderLoaded.bind(this);
  
      reader.readAsBinaryString(file);
  
      this.prodServ.controls['imageURL'].setValue(this.url);
      console.log(this.url)
    }

    _handleReaderLoaded(readerEvt: { target: { result: any; }; }) {
      var binaryString = readerEvt.target.result;
             this.url= 'data:image/png;base64,'+  btoa(binaryString);
             this.foodForm.controls['imageURL'].setValue(this.url);
             console.log(btoa(binaryString));
     }

     
  

  }


