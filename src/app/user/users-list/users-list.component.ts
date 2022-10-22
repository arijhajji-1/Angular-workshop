import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
id= 5;

usersList: User[]= [
{
idCustomer: 1,
firstName: "Mila",
lastName: " Kunis",
birthDate: "1999-06-30",
accountCategory: "Admin",
email: "mila@kunis.com",
password: "test",
picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
profession: "Software Engineer"
},
{
idCustomer: 2,
firstName: "George",
lastName: "Clooney",
birthDate: "1999-06-30",
accountCategory: "Customer",
email: "marlon@brando.com",
password: "test",
picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
profession: "Software Engineer"
},
{
idCustomer: 3,
firstName: "George",
lastName: "Clooney",
birthDate: "1999-06-30",
accountCategory: "Customer",
email: "marlon@brando.com",
password: "test",
picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
profession: "Software Engineer"
},
{
idCustomer: 4,
firstName: "Ryan",
lastName: "Gossling",
birthDate:"1999-06-30",
accountCategory: "Golden",
email: "Ryan@nicholson.com",
password: "test",
picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
profession: "Software Engineer"
},
{
idCustomer: 5,
firstName: "Robert",
lastName: "Downey",
birthDate: "1999-06-30",
accountCategory: "Blocked Account",
email: "robert@nicholson.com",
password: "test",
picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
profession: "Software Engineer"
}
]

// La variable permetant de récupérer la valeur de recherche
filter!:string;

  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  goToAdmin(){
    this.route.navigate(['users/Admin']);

  }

  deleteUser(user:User){
   const index = this.usersList.indexOf(user, 0);
if (index > -1) {
   this.usersList.splice(index, 1);
}
  }
}
