import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor() { }

  getAllUsers() {
    return axios.get(this.url)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }

  getUser(id) {
     return axios.get(`${this.url}/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  async deleteUser(id) {
    return await axios.delete(`${this.url}/${id}`)
        .then(res => res.data)
  }

  addUser(user) {
    return axios.post(`${this.url}` , user)
      .then(res => res.data)

  }


}
