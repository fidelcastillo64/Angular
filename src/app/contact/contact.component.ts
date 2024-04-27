import { Component } from '@angular/core';
import { contactUser } from '../configu/contact.users';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public user: contactUser ;
  constructor(){
    this.user = new contactUser('','', '','');
  }
  onSubmit(form: any){
    console.log(form);
    form.reset();
    console.log(this.user);
  }

}
