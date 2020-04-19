import { Component, OnInit } from '@angular/core';
import { WanikaniTokenService } from 'wanikani-api-ng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public tokenService: WanikaniTokenService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  openAccount(){
    console.log("Account Menu Item Clicked")
  }

  openHelp(){
    console.log("Help Item Clicked")
  }

  signOut(){
    this.tokenService.logout()
    this.router.navigate(['login'])
  }
}
