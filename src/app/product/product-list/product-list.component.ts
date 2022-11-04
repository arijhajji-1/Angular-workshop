import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [UserServiceService]
})
export class ProductListComponent implements OnInit {

  constructor( private ser: UserServiceService) { }

  ngOnInit(): void {
    console.log(this.ser.getAllUsers());

  }

}
