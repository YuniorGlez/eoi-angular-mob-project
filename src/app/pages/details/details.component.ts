import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../../services/api-manager.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user = {}
  constructor(private apiManager: ApiManagerService, private route: ActivatedRoute) {
    // getUser

    // ¿Cómo cojo un param de la url angular? google
    /*     this.route.snapshot.paramMap.get('id')
     */


  }

  ngOnInit(): void {
  }

  getUser(id: number) {
    this.apiManager.getUser(id)
    .then( )

  }


}
