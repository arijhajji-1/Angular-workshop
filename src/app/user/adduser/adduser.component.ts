import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

// reactiveForm = new FormGroup({
// firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
// lastName: new FormControl(''),
// credentials: new FormGroup({
//   email: new FormControl('', Validators.email),
//   password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}?')])
// })

//});

reactiveForm = this.fb.group({
firstName:['', [Validators.required, Validators.minLength(3)]],
lastName: [''],
credentials : this.fb.group({
email: ['', Validators.email],
password: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}?')])]}),
skills: this.fb.array([])
});




  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }

  Save(){
    console.log(this.reactiveForm);
  }

  addSkills( ){

     this.skills.push(new FormControl(Validators.required));
  }


  get firstName(){
    return this.reactiveForm.get('firstName');
  }

  get skills(){
    return this.reactiveForm.get('skills') as FormArray
  }
}
