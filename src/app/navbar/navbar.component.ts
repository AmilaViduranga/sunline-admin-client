import { Component, OnInit }      from '@angular/core';
import { Router }                 from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../dashboard/dashboard.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /*
   * log out from the system
   */
  logoutFromSystem() {
    localStorage.clear();
    this.router.navigateByUrl("/");
  }

}
