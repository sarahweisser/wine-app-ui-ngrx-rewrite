import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
//import { UserListComponent } from './user-list/user-list.component';
import { VerifyUserComponent } from './verify-user/verify-user.compontent';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';

const userRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
   LoginComponent,
   //UserListComponent,
   VerifyUserComponent
  ]
})
export class UserModule { }