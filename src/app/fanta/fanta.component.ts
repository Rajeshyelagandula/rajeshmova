import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fanta',
  templateUrl: './fanta.component.html',
  styleUrls: ['./fanta.component.css']
})
export class FantaComponent implements OnInit {
  num:any='';
  ans:any='';


  constructor() { }

  ngOnInit(): void {
  }
  onchange(){
    if(this.num>=0){
      this.ans=Math.sqrt(this.num);
    }
    else{
      this.ans="negative numbers are not allowed"
    }
    
  }

}
