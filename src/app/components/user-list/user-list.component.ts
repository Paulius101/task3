import {Component,OnInit} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service'
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 public title = 'user-list';
 public displayedColumns: string[] = ['firstName', 'lastName']; 
 public  isAuthenticated: boolean = false;
 
  constructor(public authService: AuthorizationService, public usersService: UsersService) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.login().subscribe(result => {
        this.isAuthenticated = result;
        this.usersService.fetchUsers();
      });
    }
  }

  public onSelected(user: User) {
    this.usersService.selectedUser = user;
    this.usersService.getDetails();
  }

  public detailsFound(): boolean {
    return this.usersService.details.identifications[0] !== undefined
  }
}
