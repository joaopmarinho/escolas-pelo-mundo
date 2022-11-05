import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserCadastroComponent } from './components/user-cadastro/user-cadastro.component';

const routes: Routes = [
  { path: 'userCadastro', component: UserCadastroComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
