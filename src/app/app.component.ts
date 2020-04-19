import { Component, OnInit } from '@angular/core';
import { WanikaniTokenService } from 'wanikani-api-ng';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Burnt Tofu';

  constructor(private tokenService: WanikaniTokenService, private router: Router) {}

  ngOnInit() {
    this.tokenService.getIsAuthenticated().pipe().subscribe(
      authenticated => {
        if(authenticated)
          this.router.navigate(['/home']);
        else
          this.router.navigate(['/login']);
      }
    )
  }

}
