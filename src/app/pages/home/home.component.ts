import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../../services/api-manager.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myObject = { name : "Nuevo" , email : "email" , tlf : "phone"};

  users = [];
  constructor( private apiManager: ApiManagerService) {
    apiManager.getAllUsers()
      .then( response => {
        this.users = response;
        console.log(this.users)
      })


  }

  deleteUser(id: number) {
    this.apiManager.deleteUser(id)
      .then (response => {
        this.users=this.users.filter(user => user.id != id)
      })
      .catch((error) => {
        console.log(error)
      });

  }

  addUser() {
    const user = {
      name : this.myObject.name,
      phone : this.myObject.tlf,
      email : this.myObject.email
    }

    this.apiManager.addUser(user)
      .then(newUser => {
        console.log('Lo metí en la api');
        console.log({ newUser });
        this.users.unshift(newUser)
        this.myObject = {
          name: "",
          email: "",
          tlf : ""

        }
      })
  }

  ngOnInit(): void {

  }

}
