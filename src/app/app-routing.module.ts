import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TableComponent } from './Table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'table', canActivate: [AuthGuardService], component: TableComponent },
  { path: '**', redirectTo: 'table' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
