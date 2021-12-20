import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  User,
  Details
} from '../models/user';
import {
  AuthorizationService
} from './authorization.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  details!: Details;
  selectedUser: User | null = null;

  constructor(private httpClient: HttpClient, private authService: AuthorizationService) {}

  public fetchUsers() {
    this.httpClient.get('https://demo.credoid.com/api/users', {
      headers: {
        "authorization": this.authService.getHeaderValue()
      }
    }).subscribe(result => {

      this.users = result as User[];
    })
  }


  public getDetails() {
    this.httpClient.get(`https://demo.credoid.com/api/users/${this.selectedUser?.id}`, {
      headers: {
        "authorization": this.authService.getHeaderValue()
      }
    }).subscribe(result => {
      this.details = result as Details;
    })
  }

}
