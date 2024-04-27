import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/requests.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrl: './external.component.css',
  providers: [RequestService]
})
export class ExternalComponent implements OnInit{
  public users: any;
  public userId: any;
  public date: any;


  public new_user: any;
  public save_user: any;

  constructor(
    private _requestService: RequestService
  )
  {
    this.userId = 2;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }
  

  ngOnInit() {
    this.loadUsers(this.userId);
    this.date = new Date(2018, 5, 20);
  }

  loadUsers(userId: any){
    this.users = false;
    this._requestService.Users(userId).subscribe(
      (result: any) => { // Update the type of 'result' to 'any'
        console.log(result.data);
        this.users = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  onSubmit(new_user: any){
    this._requestService.addUser(this.new_user).subscribe(
      (result: any) => {
        console.log(result);
        new_user.reset();
        this.save_user = result;
      },
      error => {
        console.log(<any>error);
      }
    );

  }
}
