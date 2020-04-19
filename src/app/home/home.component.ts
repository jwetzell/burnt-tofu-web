import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData, UserService } from 'wanikani-api-ng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: Observable<UserData>
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.getUser().pipe(map(user=>user.data))
  }

}
