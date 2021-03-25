import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './home/shell.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'home', 
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule) },
      {
        path: 'wines',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./wine/wine.module').then(m => m.WineModule)
      },
      { 
        path: 'login', 
        loadChildren: () =>
          import('./user/user.module').then(m => m.UserModule)
      },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
