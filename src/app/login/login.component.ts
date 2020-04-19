import { Component, OnInit, OnDestroy } from '@angular/core';
import { WanikaniTokenService } from 'wanikani-api-ng';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  destroyed = new Subject();

  tokenForm = new FormGroup({
    apiToken: new FormControl('',[Validators.required])
  })

  constructor(private tokenService: WanikaniTokenService, private router:Router) { }

  ngOnInit(): void {
    // subscribe to is authenticated and navigate away when the value is true
    this.tokenService.getIsAuthenticated().pipe(
      takeUntil(this.destroyed),
      filter(authenticated => authenticated) // only continue if the value is true
    ).subscribe(
      (_) => { this.router.navigate(['home'])}
    )
  }

  ngOnDestroy(): void {
    this.destroyed.next();
  }

  formSubmit() {
    this.tokenService.setApiToken(this.tokenForm.value.apiToken)
  }

}
