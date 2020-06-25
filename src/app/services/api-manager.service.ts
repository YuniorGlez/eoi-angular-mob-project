import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  url = 'https://jsonplaceholder.typicode.com/users' ;

  constructor() { }

  getAllUsers(){
      axios.get(this.url){

      }

  }
}
