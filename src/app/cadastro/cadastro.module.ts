import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { UserCadastroComponent } from './components/user-cadastro/user-cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserCadastroComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserCadastroComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CadastroModule { }
