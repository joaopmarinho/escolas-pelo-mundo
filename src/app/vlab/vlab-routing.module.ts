import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VLabRoutingModule { }
