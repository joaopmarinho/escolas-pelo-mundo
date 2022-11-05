import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCadastroComponent } from './cadastro/components/user-cadastro/user-cadastro.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { 
    title: "Cadastro", 
    path: 'cadastro',
    component: UserCadastroComponent
  },
  { 
    title: "Home Page", 
    path: 'home',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
