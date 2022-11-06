import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router:Router
  ) {}
  userName:any = ''
  email:any = ''
  instituicao:any = ''
  cargo:any = ''
  

  ngOnInit(): void {
    this.carregaDados();
  }

  carregaDados(){

    let user = sessionStorage.getItem('userLogged')
    if(user === null){
      this.router.navigate(['/cadastro'])
    }
    else{
      let isUser = JSON.parse(user)
      this.userName = isUser.nome;
      this.email = isUser.email;
      this.instituicao = isUser.instituicao;
      this.cargo = isUser.cargo;
    }
  }
  goLogin(){
    this.router.navigate(['/']);
  }

}
