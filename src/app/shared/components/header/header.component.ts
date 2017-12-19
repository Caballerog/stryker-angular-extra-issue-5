import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'polinet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerService: Router,
  ) { }

  ngOnInit() {
  }
  goToPage(url: string): void {
    this.routerService.navigateByUrl(url);
  }

}
