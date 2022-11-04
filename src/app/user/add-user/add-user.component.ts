import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/Core/Models/user';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserServiceService]
})
export class AddUserComponent implements OnInit {

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





  constructor(private fb:FormBuilder, private userS: UserServiceService) { }

  ngOnInit(): void {
    //this.usersList.push(

//         {
// idCustomer: 2,
//  firstName: "George",
//  lastName: "Clooney",
// birthDate: "1999-06-30",
//  accountCategory: "Customer",
//  email: "marlon@brando.com",
//  password: "test",
//  picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
//  profession: "Software Engineer"
//  }
//     )
  }

  Save(){
    console.log(this.reactiveForm);
    let user = this.reactiveForm.getRawValue();
    console.log("user = ", user);

  }

  addSkills( ){

     this.skills.push(new FormControl('',Validators.required));
  }


  get firstName(){
    return this.reactiveForm.get('firstName');
  }



  get skills(){
    return this.reactiveForm.get('skills') as FormArray
  }
}
