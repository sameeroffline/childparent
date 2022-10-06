import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name ="Angular";

  users = [{name:"sameer",  shift1 : [{a:'q'},{b:'w'}], age:21, gender:"m"},
  {name:"nishanth", shift:2, age:20, gender:"m"},
  {name:"hari",  shift:3, age:22, gender:"m"},
  {name:"samantha",  shift:1, age:30, gender:"f"},
  {name:"trisha",  shift:4, age:34, gender:"f"},
  {name:"shriya",  shift:1, age:35, gender:"f"}
  ];
}
