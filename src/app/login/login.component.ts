import { Component, OnInit } from '@angular/core';
import { WanikaniTokenService } from 'wanikani-api-ng';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tokenForm = new FormGroup({
    apiToken: new FormControl('',[Validators.required])
  })
  constructor(private tokenService: WanikaniTokenService, private router:Router) { }

  ngOnInit(): void {
    
  }

  formSubmit() {
    this.tokenService.setApiToken(this.tokenForm.value.apiToken)
    this.router.navigate([''])
  }

}
