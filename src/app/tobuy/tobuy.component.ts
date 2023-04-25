import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tobuy',
  templateUrl: './tobuy.component.html',
  styleUrls: ['./tobuy.component.css'],
  
})
export class TobuyComponent implements OnInit{

  lines: string[] = [];
  newLine : string;
  addDiv = false;

  ngOnInit() {
    this.lines = JSON.parse(localStorage['lines']);
  }

  saveLine(){
    if(this.newLine){
      let line = '';
      line = this.newLine;
      this.lines.push(line);
      this.newLine = '';
      localStorage.setItem("lines", JSON.stringify(this.lines));
    }else{
      alert('Please insert text')
    }
  }

  remove(id: number) {

      this.lines = this.lines.filter((v, i) => i !== id)
      localStorage.setItem("lines", JSON.stringify(this.lines));
  }

  openAdd() {
    this.addDiv = !this.addDiv;
  }

  

}
