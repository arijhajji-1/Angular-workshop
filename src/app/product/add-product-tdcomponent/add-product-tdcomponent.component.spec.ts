import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTDComponentComponent } from './add-product-tdcomponent.component';

describe('AddProductTDComponentComponent', () => {
  let component: AddProductTDComponentComponent;
  let fixture: ComponentFixture<AddProductTDComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductTDComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductTDComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
