import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class UserListComponent {
    pageTitle = 'Users';

    @Input() errorMessage: string;
    @Input() users: User[];
    @Input() selectedUser: User;
    
  }