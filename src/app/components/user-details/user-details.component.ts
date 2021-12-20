import {Component,OnInit} from '@angular/core';
import {AuthorizationService} from 'src/app/services/authorization.service'
import {  UsersService} from 'src/app/services/users.service';
import { User,Details} from 'src/app/models/user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
public users: User[] = [];
public details!: Details;
public selectedUser: User | null = null;

  constructor(public usersService: UsersService, public authService: AuthorizationService, private httpClient: HttpClient) {}

  ngOnInit(): void {}
  public detailsFound(): boolean {
    return this.usersService.details.identifications[0] !== undefined
  }

}
