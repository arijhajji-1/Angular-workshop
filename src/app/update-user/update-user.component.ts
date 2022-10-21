import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
myId=0;
  constructor(private actR: ActivatedRoute, private R:Router) { }

  ngOnInit(): void {
   //this.myId = Number(this.actR.snapshot.params['param']);
    this.actR.paramMap.subscribe(data => this.myId = Number(data.get('param')));
  }
  // updateNext(){
  //   this.R.navigate(['updateUser', this.myId++]);
  // }

}
