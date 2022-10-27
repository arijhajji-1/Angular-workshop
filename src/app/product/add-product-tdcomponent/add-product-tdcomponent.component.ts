import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-tdcomponent',
  templateUrl: './add-product-tdcomponent.component.html',
  styleUrls: ['./add-product-tdcomponent.component.css']
})
export class AddProductTDComponentComponent implements OnInit {
  disabled: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
