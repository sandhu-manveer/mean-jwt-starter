import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from "../../services/authenitcate.service";
import { User } from "../../services/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new User('','');
  loading = false;
  public errorMsg = '';

  constructor(
    private router: Router,
    private _service:AuthenticateService
  ) { }

  ngOnInit() {
    // reset login status
    this._service.logout();
  }

  login() {
    this.loading = true;
    this._service.login(this.user)
      .subscribe(res => {
        console.log(res);
        if (res === true) {
          this.router.navigate(['/']);
        } else {
          this.errorMsg = 'Invalid Credentials';
        }
      });
  }

}
