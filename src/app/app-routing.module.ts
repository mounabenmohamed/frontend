import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DemandeComponent } from './demande/demande.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: '' , component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'table' , component: TableComponent},
  {path: 'demande' , component: DemandeComponent},
  {path: 'create' , component: CreateComponent},
  {path: 'delete' , component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
