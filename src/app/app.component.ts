import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'angular-practice';
  interpolation = 'interpolation example';
  studentname:string= 'supriya';
  studentlastname:string= 'chintala';
  a:number = 18;
  b:number = 20;
  cols:number=3;
  bdr:number=1;
  ht:number=200;
  wt:number=400;
  data:string='two way data'
  data1:string='supriyachintala'

  checkngif=true;
  btnclick()
  {
    alert("event binding");
  }

  dresses=['kurta', 'saree', 'lehenga']
  info=[{name: "pinky", email: "ss@gmail.com"},
  {name: "shadow", email: "ar@gmail.com"},
  {name: "nemo", email: "ld@gmail.com"},
  {name: "lesa", email: "sa@gmail.com"}

]



// constructor(private httpClient:HttpClient)



}

