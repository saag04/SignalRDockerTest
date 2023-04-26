import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountService } from 'src/app/_services/account.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  
  } 

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log('Reponse on login: ', response);
       
      },
      error: error => console.log('error on login: ', error)

    })
    console.log('model is currently: ', this.model);
  }

  logout() {
    this.accountService.logout();
   
  }

}
