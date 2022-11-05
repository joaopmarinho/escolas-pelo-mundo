import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VLabRoutingModule } from './vlab-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    VLabRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class VLabModule { }
