import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrl: './hola.component.css'
})
export class HolaComponent implements OnInit{
  public title: string;
  public description: string;
  public name: string | undefined;
  public followers: string | undefined;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Hola';
    this.description = 'Hola mundo desde Angular';

    
  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.followers = params['followers'];
    });
  }

  reload(){
    this._router.navigate(['/shoes']);
  }

  public changetitle() {
    this.title = 'change title';
  }
}
