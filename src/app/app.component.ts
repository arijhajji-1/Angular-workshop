import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4Twin8DataBinding';

Students = [
  {
    id:1,
    name:"Mohamed",
    email:'mohamed@esprit.tn'
  },
  {
    id:2,
    name:"Salah",
    email:'Salah@esprit.tn'
  },{
    id:3,
    name:"Sana",
    email:'Sana@esprit.tn'
  },
]

 P=false;
 B!: Boolean;
 G !:Boolean;
setTheme(th:String){
    if( th === 'Pink'){
      this.P = true;
      this.B= false;
      this.G =false;
    }
    if( th === 'Blue'){
      this.P = false;
      this.B= true;
      this.G =false;
    }
    if( th === 'Green'){
      this.P = false;
      this.B= false;
      this.G =true;
    }
}




}
