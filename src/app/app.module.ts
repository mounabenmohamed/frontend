import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DemandeComponent } from './demande/demande.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    RegisterComponent,
    HomeComponent,
   
    DemandeComponent,
    CreateComponent,
    DeleteComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
   
    RouterModule,
    // AuthGuard,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
