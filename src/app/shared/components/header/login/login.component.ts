import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'polinet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private routerService: Router) {
  }
  public goToPage(url: string): void {
    this.routerService.navigateByUrl(url);
  }

}
