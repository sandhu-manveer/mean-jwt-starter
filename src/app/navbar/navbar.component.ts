import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenitcate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _service:AuthenticateService
  ) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this._service.isAuthenticated();
  }

}
