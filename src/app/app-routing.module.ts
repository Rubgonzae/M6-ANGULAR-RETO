import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
 {
  path: '',
  component: HomeComponent,

  children: [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
   },
   {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
   },
   {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
   },
   {
    path: 'transacciones',
    loadChildren: () => import('./components/transactions/transactions.module').then(m => m.TransactionsModule)
   },
   {
    path: '**',
    redirectTo: 'home',
  }
  ],
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
