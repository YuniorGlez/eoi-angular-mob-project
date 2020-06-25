import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../../services/api-manager.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user : any = { }
  constructor(private apiManager: ApiManagerService, private route: ActivatedRoute) {
    this.getUser(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  ngOnInit(): void {
  }

  getUser(id: number) {
    this.apiManager.getUser(id)
      .then( user => this.user = user )
      .catch(err => console.log(err))
  }


}
